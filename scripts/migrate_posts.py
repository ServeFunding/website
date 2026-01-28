#!/usr/bin/env python3
"""
Python migration script to convert blog-posts.ts to individual .mdoc files
"""

import re
import os
import json
from pathlib import Path

# Read the blog-posts.ts file
ts_file = Path(__file__).parent.parent / "src" / "data" / "blog-posts.ts"
posts_dir = Path(__file__).parent.parent / "posts"

# Ensure posts directory exists
posts_dir.mkdir(exist_ok=True)

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all blog post objects
# Find all objects that have an 'id' property
post_pattern = r'\{\s*id:\s*"([^"]+)".*?(?=\},\s*\{|export const)'
posts = re.findall(r'\{\s*id:\s*"([^"]+)"', content)

print(f"Found {len(posts)} blog posts")
print(f"Already migrated: building-people-estonia-trip, coffee-trader-po-financing")

# Extract each post using a more robust method
# Split by }, { pattern and process each
def extract_posts_robust(content: str):
    """Extract all blog posts from the TypeScript array"""
    # Find the start of the blogPosts array
    start = content.find('export const blogPosts: BlogPost[] = [')
    if start == -1:
        start = content.find('const blogPosts = [')

    if start == -1:
        print("Could not find blogPosts array")
        return {}

    # Start from first {
    start = content.find('{', start)

    posts = {}

    # Use a stack-based approach to find matching braces
    i = start
    while i < len(content):
        if content[i] == '{':
            # Find the matching closing brace
            brace_count = 1
            j = i + 1
            while j < len(content) and brace_count > 0:
                if content[j] == '{':
                    brace_count += 1
                elif content[j] == '}':
                    brace_count -= 1
                j += 1

            # Extract the object
            obj_str = content[i:j]

            # Extract the id
            id_match = re.search(r'id:\s*"([^"]+)"', obj_str)
            if id_match:
                post_id = id_match.group(1)
                posts[post_id] = obj_str
                print(f"Extracted: {post_id}")

            i = j
        else:
            i += 1

    return posts

print("\nExtracting blog posts...")
raw_posts = extract_posts_robust(content)

# Parse a single post's string and extract its properties
def parse_post(post_str: str):
    """Parse a blog post object string"""
    post_data = {}

    # Extract simple string properties
    props = ['id', 'title', 'subtitle', 'excerpt', 'author', 'date', 'category', 'image']
    for prop in props:
        match = re.search(rf'{prop}:\s*"([^"]*(?:\\.[^"]*)*)"', post_str)
        if match:
            # Unescape quotes
            value = match.group(1).replace('\\"', '"')
            post_data[prop] = value

    # Extract arrays
    for prop in ['relatedSolutions', 'relatedIndustries']:
        match = re.search(rf'{prop}:\s*\[((?:[^[\]]*|\[.*?\])*)\]', post_str)
        if match:
            # Parse array items
            items_str = match.group(1)
            items = re.findall(r'"([^"]*)"', items_str)
            post_data[prop] = items

    # Extract content array
    content_match = re.search(r'content:\s*\[([\s\S]*?)\]\s*\}?\s*(?:,|$)', post_str)
    if content_match:
        content_str = content_match.group(1)
        content_items = []

        # Find all content block objects
        block_pattern = r'\{\s*type:\s*[\'"]([^\'"]+)[\'"],\s*text:\s*[\'"]([^\'"]*(?:\\.[^\'"]*)*)[\'"\s]*\}'
        for match in re.finditer(block_pattern, content_str):
            block_type = match.group(1)
            text = match.group(2).replace('\\"', '"').replace("\\'", "'")
            content_items.append({'type': block_type, 'text': text})

        post_data['content'] = content_items

    return post_data

# Convert each post to markdown
def content_to_markdown(content_items):
    """Convert content array to markdown"""
    lines = []
    for item in content_items:
        if item['type'] == 'h2':
            lines.append(f"## {item['text']}")
        elif item['type'] == 'h3':
            lines.append(f"### {item['text']}")
        elif item['type'] == 'blockquote':
            lines.append(f"> {item['text']}")
        else:  # 'p'
            lines.append(item['text'])
    return '\n\n'.join(lines)

def build_frontmatter(post_data):
    """Build YAML frontmatter"""
    lines = [
        f'title: "{post_data.get("title", "").replace(chr(34), chr(34)+chr(92)+chr(34)+chr(34))}"',
        f'subtitle: "{post_data.get("subtitle", "").replace(chr(34), chr(34)+chr(92)+chr(34)+chr(34))}"',
        f'excerpt: "{post_data.get("excerpt", "").replace(chr(34), chr(34)+chr(92)+chr(34)+chr(34))}"',
        f'author: "{post_data.get("author", "")}"',
        f'date: "{post_data.get("date", "")}"',
        f'category: "{post_data.get("category", "")}"',
    ]

    if post_data.get('image'):
        lines.append(f'image: "{post_data["image"]}"')

    if post_data.get('relatedSolutions'):
        solutions = ', '.join(f'"{s}"' for s in post_data['relatedSolutions'])
        lines.append(f'relatedSolutions: [{solutions}]')

    if post_data.get('relatedIndustries'):
        industries = ', '.join(f'"{i}"' for i in post_data['relatedIndustries'])
        lines.append(f'relatedIndustries: [{industries}]')

    lines.append('authorImage: "/Michael Headshot.webp"')

    return '\n'.join(lines)

print("\nConverting to markdown...")
created = 0
skipped = 0

already_migrated = {'building-people-estonia-trip', 'coffee-trader-po-financing'}

for post_id, post_str in raw_posts.items():
    if post_id in already_migrated:
        print(f"⊘ Skipped (already exists): {post_id}.mdoc")
        skipped += 1
        continue

    # Check if file exists
    mdoc_file = posts_dir / f"{post_id}.mdoc"
    if mdoc_file.exists():
        print(f"⊘ Skipped (already exists): {post_id}.mdoc")
        skipped += 1
        continue

    # Parse the post
    try:
        post_data = parse_post(post_str)
        if not post_data.get('title'):
            print(f"✗ Skipped {post_id} - could not parse title")
            continue

        # Build markdown file
        frontmatter = build_frontmatter(post_data)
        markdown_content = content_to_markdown(post_data.get('content', []))

        full_content = f"---\n{frontmatter}\n---\n\n{markdown_content}\n"

        # Write file
        with open(mdoc_file, 'w', encoding='utf-8') as f:
            f.write(full_content)

        print(f"✓ Created: {post_id}.mdoc")
        created += 1

    except Exception as e:
        print(f"✗ Error converting {post_id}: {e}")

print(f"\n{'='*50}")
print(f"Migration complete!")
print(f"✓ Created: {created} files")
print(f"⊘ Skipped: {skipped} files")
print(f"{'='*50}")

if created > 0:
    print(f"\nNext steps:")
    print(f"1. Verify converted posts in /posts directory")
    print(f"2. Test blog pages: npm run dev")
    print(f"3. Check for any conversion issues")
    print(f"4. Delete src/data/blog-posts.ts when fully migrated")
