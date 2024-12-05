import type { OpenNextConfig } from '@opennextjs/aws/types/open-next.js';
const config = {
  default: {
    override: {
      cdnInvalidation: 'cloudfront',
    },
  },
} satisfies OpenNextConfig;

export default config;
