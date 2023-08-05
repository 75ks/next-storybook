import type { StorybookConfig } from "@storybook/nextjs";
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '../app/components/**/*.stories.ts',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Webpackの設定
  webpackFinal: async (config: Configuration) => {
    // 監視オプション
    config.watchOptions = {
      poll: 1000, // 変更チェックをする間隔（ミリ秒）
      aggregateTimeout: 500, // 変更があってから再ビルドするまでの間隔（ミリ秒）
      ignored: ["node_modules"], // 監視対象外ディレクトリ
    };
    return config;
  },
};
export default config;
