// Canonical list of 16 industries + other option
export const INDUSTRIES = [
  { id: 'manufacturing', label: 'Manufacturing', icon: 'Factory' },
  { id: 'wholesale-distribution', label: 'Wholesale & Distribution', icon: 'Truck' },
  { id: 'construction', label: 'Construction', icon: 'HardHat' },
  { id: 'healthcare-services', label: 'Healthcare Services', icon: 'Heart' },
  { id: 'government-contractors', label: 'Government Contractors', icon: 'Shield' },
  { id: 'staffing-agency', label: 'Staffing Agency', icon: 'Users' },
  { id: 'food-beverage', label: 'Food & Beverage', icon: 'UtensilsCrossed' },
  { id: 'advertising-media', label: 'Advertising & Media', icon: 'Megaphone' },
  { id: 'ecommerce-retail', label: 'E-Commerce & Retail', icon: 'ShoppingCart' },
  { id: 'consumer-products', label: 'Consumer Products', icon: 'Package' },
  { id: 'software-saas', label: 'Software & SaaS', icon: 'Code' },
  { id: 'consulting-it', label: 'Consulting & IT Services', icon: 'Building2' },
  { id: 'cleaning-janitorial', label: 'Cleaning & Janitorial', icon: 'Sparkles' },
  { id: 'security-services', label: 'Security Guard Services', icon: 'Lock' },
  { id: 'telecommunications', label: 'Telecommunications & IoT', icon: 'Wifi' },
  { id: 'other', label: 'Other', icon: 'HelpCircle' },
] as const

export const INDUSTRY_LABELS = INDUSTRIES.map(i => i.label)

// Priority industries for 650+ credit triage rule
export const FAST_TRACK_INDUSTRIES = [
  'manufacturing',
  'wholesale-distribution',
  'healthcare-services',
  'government-contractors',
  'staffing-agency',
  'software-saas',
  'ecommerce-retail',
] as const
