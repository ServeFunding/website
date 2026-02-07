export type TriageAction = 'mike' | 'mike_with_chat' | 'kyler_with_chat' | 'skip_question'
export type LogicalOperator = 'AND' | 'OR'

export interface TriageCondition {
  [key: string]: string | string[]
}

export interface TriageRule {
  question_id: string // Which question triggers this rule (after it's answered)
  if: TriageCondition // Conditions to check
  type: LogicalOperator // AND = all conditions must match, OR = any condition can match
  then: {
    action: TriageAction
    skipQuestionId?: string // If action is 'skip_question', which question to skip
  }
}

export const triageRules: TriageRule[] = [
  // After user_role: Skip partner_type if not a Referral Partner
  {
    question_id: 'user_role',
    if: { user_role: ['Business Owner / Operator', 'Commercial Banker'] },
    type: 'OR',
    then: {
      action: 'skip_question',
      skipQuestionId: 'partner_type'
    }
  },

  // After funding_amount: Route to Mike if revenue >= $10M
  {
    question_id: 'funding_amount',
    if: {
      annual_revenue: ['$10MM-$20MM', '$20MM-$50MM', '$50MM-$100MM', '$100MM+']
    },
    type: 'AND',
    then: {
      action: 'mike'
    }
  },

  // After funding_amount: Route to Mike if revenue >= $3M AND funding >= $1M
  {
    question_id: 'funding_amount',
    if: {
      annual_revenue: ['$3MM-$10MM', '$10MM-$20MM', '$20MM-$50MM', '$50MM-$100MM', '$100MM+'],
      funding_amount: ['$1MM-$5MM', '$5MM-$10MM', '$10MM+']
    },
    type: 'AND',
    then: {
      action: 'mike'
    }
  },

  // After owner_credit_score: Route to Mike if revenue >= $3M AND funding >= $250K AND 2+ years AND credit >= 700
  {
    question_id: 'owner_credit_score',
    if: {
      annual_revenue: ['$3MM-$10MM', '$10MM-$20MM', '$20MM-$50MM', '$50MM-$100MM', '$100MM+'],
      funding_amount: ['$250K-$500K', '$500K-$1MM', '$1MM-$5MM', '$5MM-$10MM', '$10MM+'],
      time_in_business: ['2-3 years', '3-4 years', '5+ years'],
      owner_credit_score: ['Excellent (750-850)', 'Good (700-750)']
    },
    type: 'AND',
    then: {
      action: 'mike'
    }
  },

  // After owner_credit_score: Route to Mike if credit >= 650 AND industry is priority (manufacturing, wholesale, healthcare, govcon, staffing, saas, ecommerce)
  {
    question_id: 'business_industry',
    if: {
      annual_revenue: ['$3MM-$10MM', '$10MM-$20MM', '$20MM-$50MM', '$50MM-$100MM', '$100MM+'],
      funding_amount: ['$250K-$500K', '$500K-$1MM', '$1MM-$5MM', '$5MM-$10MM', '$10MM+'],
      time_in_business: ['2-3 years', '3-4 years', '5+ years'],
      owner_credit_score: ['Fair (650-700)', 'Excellent (750-850)', 'Good (700-750)'],
      business_industry: ['Manufacturing', 'Wholesale & Distribution', 'Healthcare Services', 'Government Contractors', 'Staffing Agency', 'Software & SaaS', 'E-Commerce & Retail']
    },
    type: 'AND',
    then: {
      action: 'mike'
    }
  },

  // After owner_credit_score: Route to Kyler_with_chat if revenue < $1M OR funding < $250K OR time_in_business < 1yr
  {
    question_id: 'owner_credit_score',
    if: {
      annual_revenue: ['$500K-$1MM'],
      funding_amount: ['$100K-$250K'],
      time_in_business: ['< 1 year']
    },
    type: 'OR',
    then: {
      action: 'kyler_with_chat'
    }
  }
]

// Helper function to check if a value matches a condition
export function matchesCondition(
  actualValue: string | string[] | undefined,
  expectedValue: string | string[]
): boolean {
  if (actualValue === undefined) return false

  const actualValues = Array.isArray(actualValue) ? actualValue : [actualValue]
  const expectedValues = Array.isArray(expectedValue) ? expectedValue : [expectedValue]

  return actualValues.some(av => expectedValues.includes(av))
}

// Function to evaluate a rule against current form state
export function evaluateRule(
  rule: TriageRule,
  formData: Record<string, string | string[] | undefined>
): boolean {
  const conditions = Object.entries(rule.if)

  if (rule.type === 'AND') {
    // All conditions must match
    return conditions.every(([key, expectedValue]) => {
      return matchesCondition(formData[key], expectedValue)
    })
  } else {
    // OR: At least one condition must match
    return conditions.some(([key, expectedValue]) => {
      return matchesCondition(formData[key], expectedValue)
    })
  }
}

// Function to find applicable rules after a question is answered
export function checkTriageRules(
  questionId: string,
  formData: Record<string, string | string[] | undefined>
): TriageRule | null {
  // Find rules that apply to this question
  const applicableRules = triageRules.filter(rule => rule.question_id === questionId)

  // Return first matching rule
  for (const rule of applicableRules) {
    if (evaluateRule(rule, formData)) {
      return rule
    }
  }

  return null
}

// Default behavior: if no triage rules matched, continue through form and then go to mike_with_chat
export const DEFAULT_ACTION: TriageAction = 'mike_with_chat'
