import { Config as MarkdocConfig } from '@markdoc/markdoc'

export const config: MarkdocConfig = {
  tags: {
    callout: {
      attributes: {
        type: {
          type: String,
          default: 'info',
          matches: ['info', 'warning', 'tip', 'danger'],
        },
        title: {
          type: String,
        },
      },
    },
    relatedPosts: {
      attributes: {
        category: {
          type: String,
        },
        solution: {
          type: String,
        },
        limit: {
          type: Number,
          default: 3,
        },
      },
    },
  },
}
