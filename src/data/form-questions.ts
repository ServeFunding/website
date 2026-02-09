export interface Question {
  id: string
  title: string
  answers: string[]
  type?: 'single' | 'multi' | 'single_with_other' | 'contact-info'
  placeholder?: string
  helpHtml?: string
}

/**
 * single_with_other type explanation:
 * - Displays options as button group (like 'single' type)
 * - Automatically adds "Other" option if not in the answers array
 * - When "Other" is selected, shows an input field for custom response
 * - Both the selected option and custom text are submitted
 *
 * Example:
 * {
 *   id: 'industry',
 *   title: 'What is your business industry?',
 *   answers: ['Healthcare', 'Manufacturing', 'Retail'],
 *   type: 'single_with_other'
 * }
 * This will display: [Healthcare] [Manufacturing] [Retail] [Other]
 * And show an input field when "Other" is clicked
 */

export const formQuestions: Question[] = [
  {
    id: 'user_role',
    title: 'I am a:',
    answers: ['Business Owner / Operator', 'Commercial Banker', 'Fractional CFO / CPA / Attorney / Accountant / Business Consultant / Other'],
    type: 'single'
  },
  {
    id: 'partner_type',
    title: 'What type of partner are you?',
    answers: ['Fractional CFO', 'CPA', 'Attorney', 'Accountant', 'Business Consultant', 'Other'],
    type: 'single'
  },
  {
    id: 'annual_revenue',
    title: 'Annual Revenue (approx.)',
    answers: ['$500K-$1MM', '$1MM-$3MM', '$3MM-$10MM', '$10MM-$20MM', '$20MM-$50MM', '$50MM-$100MM', '$100MM+'],
    type: 'single'
  },
  {
    id: 'funding_amount',
    title: 'Estimated funding amount needed',
    answers: ['$100K-$250K', '$250K-$500K', '$500K-$1MM', '$1MM-$5MM', '$5MM-$10MM', '$10MM+'],
    type: 'single'
  },
  {
    id: 'time_in_business',
    title: 'Time in Business',
    answers: ['< 1 year', '1-2 years', '2-3 years', '3-4 years', '5+ years'],
    type: 'single'
  },  
  {
    id: 'owner_credit_score',
    title: "What is the owner's approximate FICO score?",
    answers: ['Excellent (750-850)', 'Good (700-750)', 'Fair (650-700)', 'Low (below 550)', 'Not sure'],
    type: 'single',
    helpHtml: 'Not sure? <a href="https://www.experian.com/credit/credit-report/" target="_blank" rel="noopener noreferrer" style="color: #2a231a; text-decoration: underline;">Get your free credit report</a>'
  },
  {
    id: 'business_industry',
    title: 'Business Industry',
    answers: [
      'Manufacturing',
      'Wholesale & Distribution',
      'Construction',
      'Healthcare Services',
      'Government Contractors',
      'Staffing Agency',
      'Food & Beverage',
      'Advertising & Media',
      'E-Commerce & Retail',
      'Consumer Products',
      'Software & SaaS',
      'Consulting & IT Services',
      'Cleaning & Janitorial',
      'Security Guard Services',
      'Telecommunications & IoT',
      'Other'
    ],
    type: 'single'
  },
  {
    id: 'financing_needs',
    title: 'I need financing for',
    answers: [
      'Working capital to support growth',
      'Short term bridge capital',
      'Equipment or asset purchase',
      'Business acquisition or partner buyout',
      'Refinance existing debt',
      'Growth / expansion',
      'Other'
    ],
    type: 'multi'
  },
  {
    id: 'contact_us_details',
    title: 'Tell us about your business so we can serve you the best possible',
    answers: [], // textarea, no predefined answers
    type: 'single',
    placeholder: 'Tell us more...'
  },
  {
    id: 'contact_info',
    title: 'How can we reach you?',
    answers: [],
    type: 'contact-info'
  }
]
