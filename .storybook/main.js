/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const rootWebpack = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.@(js|ts|jsx|tsx)'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
  // @ts-ignore
  webpackFinal: (config) => {
    return {
      ...config,
      plugins: [...config.plugins, ...rootWebpack.plugins],
      resolve: {
        extensions: [
          ...config.resolve.extensions,
          ...rootWebpack.resolve.extensions,
        ],
        alias: {
          ...config.resolve.alias,
          ...rootWebpack.resolve.alias,
        },
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rootWebpack.module.rules],
      },
    };
  },
};
