/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'opennext-cdn-invalidation',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    const distributionID = new sst.Secret('DistributionID');

    new sst.aws.Nextjs('MyWeb', {
      buildCommand:
        'node /home/lillemagga/Koding/git/opennextjs-aws/packages/open-next/dist/index.js build',
      environment: {
        CLOUDFRONT_DISTRIBUTION_ID: distributionID.value,
      },
    });
  },
});
