export interface PartnerType {
  title: string
  image: string
  imageWidth: number
  imageHeight: number
  benefits: string[]
  description: string
}

export interface Commitment {
  title: string
  desc: string
}

export interface Testimonial {
  text: string
  author: string
}

export const partnerTypes: PartnerType[] = [
  {
    title: 'Commercial Bankers',
    image: '/partners/Professioanls talking.webp',
    imageWidth: 1024,
    imageHeight: 829,
    benefits: [
      'Elevate Client Trust: Provide access to specialized funding.',
      'Expand Your Network: Benefit from reciprocal client referrals.',
      'Boost Your Earnings: Receive competitive fees for referrals.',
      'Streamlined Collaboration: Transparent and efficient processes.',
      'Partner with Integrity: Join forces with a trusted financial leader.'
    ],
    description: 'As a Commercial Banker, partnering with Serve Funding empowers you to be the hero your clients need. By connecting them with our specialized financial solutions, you enhance their business strategies and growth potential. Your partnership with Serve Funding transforms you into a key facilitator of your clients\' financial triumphs, solidifying your role as their trusted commercial banker.'
  },
  {
    title: 'Fractional CFOs',
    image: '/partners/Fractional CFO.webp',
    imageWidth: 1024,
    imageHeight: 936,
    benefits: [
      'Enhance Service Range: Offer access to specialized funding.',
      'Forge Strategic Alliances: Strengthen your professional network.',
      'Increase Earnings: Gain referral fees from successful funding.',
      'Boost Client Loyalty: Tackle complex funding needs, enhancing retention.',
      'Access Market Insights: Stay informed on the latest funding trends.'
    ],
    description: 'As a Fractional CFO, elevate your client impact by partnering with Serve Funding. Our brokerage specializes in securing bespoke funding solutions that empower you to go beyond conventional financial management. With our expertise in complex financing, you can enhance your advisory role, becoming an indispensable asset in your clients\' growth.'
  },
  {
    title: 'Investment Bankers',
    image: '/partners/Business Professionals looking at camera.webp',
    imageWidth: 1024,
    imageHeight: 905,
    benefits: [
      'Broaden Financial Solutions: Access specialized capital and lending options.',
      'Enhance Deal Flow: Connect with mid-market companies for new opportunities.',
      'Diversify Revenue: Earn referral fees without impacting core services.',
      'Strengthen Client Bonds: Address funding challenges, improving retention.',
      'Acquire Market Insights: Deepen your knowledge of operational finance needs.'
    ],
    description: 'As an Investment Banker, your goal is to enhance client value beyond traditional deal-making. Partnering with Serve Funding opens up strategic avenues in corporate finance. Your comprehensive understanding of complex funding scenarios ensures tailored solutions that bolster your clients\' operational strategies.'
  },
  {
    title: 'CPAs / Accountants',
    image: '/partners/Handshake.webp',
    imageWidth: 1024,
    imageHeight: 882,
    benefits: [
      'Expand Financial Solutions: Access specialized funding beyond conventional options.',
      'Generate Additional Revenue: Earn referral fees from successful placements.',
      'Enhance Client Loyalty: Address complex funding needs, bolstering retention.',
      'Professional Growth: Learn advanced funding strategies to enhance your expertise.',
      'Gain Competitive Advantage: Offer unique financial solutions, attracting premium clients.'
    ],
    description: 'As an accountant, your role extends beyond number crunching to being a trusted advisor in your clients\' financial narratives. Partnering with Serve Funding can significantly expand your advisory capabilities. Through your partnership, you evolve from a traditional accountant to a holistic financial advisor.'
  },
  {
    title: 'Private Equity Firms',
    image: '/partners/Equity close up.webp',
    imageWidth: 1024,
    imageHeight: 889,
    benefits: [
      'Optimize Portfolio Performance: Access specialized capital options for growth.',
      'Discover Investment Opportunities: Identify potential investments early.',
      'Accelerate Value Creation: Address liquidity challenges efficiently.',
      'Mitigate Financial Risks: Diversify funding sources to enhance stability.',
      'Enhance Due Diligence: Gain insights into financing trends and strategies.'
    ],
    description: 'As a private equity firm, your goal is to enhance value and discover new investment opportunities. Partnering with Serve Funding offers a competitive edge by providing specialized funding solutions for your portfolio companies. Your competitive edge in deal sourcing and value creation drives superior investor returns.'
  },
  {
    title: 'Business Advisors',
    image: '/partners/Professional giving presentation.webp',
    imageWidth: 1024,
    imageHeight: 936,
    benefits: [
      'Provide Tailored Financial Options: Enhance your ability to meet clients\' strategic and operational needs.',
      'Strengthen Your Credibility: Broaden your expertise with bespoke funding solutions.',
      'Generate Additional Revenue: Earn referral fees, complementing your advisory income.',
      'Deepen Client Engagement: Address complex funding needs, securing client loyalty.',
      'Access Advanced Insights: Stay updated on funding trends to advise effectively.'
    ],
    description: 'As a Business Advisor, enriching your advisory toolkit with Serve Funding\'s resources can transform your client relationships. Our trusted brokerage facilitates access to specialized funding solutions, allowing you to extend beyond strategic advice to operational financial support.'
  }
]

export const commitments: Commitment[] = [
  {
    title: 'Clear & Efficient Processes',
    desc: 'We guide your clients through a streamlined process of obtaining alternative working capital, eliminating wasted time and frustration.'
  },
  {
    title: 'Transparent Communication',
    desc: 'We keep you in the loop so you can continue to serve your clients by sending updates at key checkpoints to keep you informed of progress.'
  },
  {
    title: 'Personalized Support',
    desc: 'We believe in trust-based, collaborative partnerships over impersonal interactions.'
  }
]

export const testimonials: Testimonial[] = [
  {
    text: 'I know I can count on the Serve Funding team to respond quickly, seek to understand my client\'s needs and really follow through. I am confident when I refer my clients to them that they are in great hands and it reflects well on me.',
    author: 'Commercial Banker'
  },
  {
    text: 'My client was in a difficult spot needing some quick funding but was concerned she would be taken advantage of. We knew by sending her to Serve Funding they would look out for her best interest and sure enough they did. She was relieved and called to thank me for the introduction!',
    author: 'Fractional CFO'
  },
  {
    text: 'A long-time client with a growing business needed capital and initially believed he knew the best solution. However, after consulting with Serve, he was pleasantly surprised by their openness to exploring various options. Ultimately, the solution came in an unexpected form, and it proved to be a better outcome for him in the long run',
    author: 'Business Advisor'
  }
]
