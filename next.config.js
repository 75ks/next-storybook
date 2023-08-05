/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpackの開発モードの設定
  webpackDevMiddleware: (config) => {
    // 監視オプション
    config.watchOptions = {
      poll: 1000, //  変更チェックをする間隔（ミリ秒）
      aggregateTimeout: 500, // 変更があってから再ビルドするまでの間隔（ミリ秒）
      ignored: ["node_modules"], // 監視対象外ディレクトリ
    }
    return config;
  },
}

module.exports = nextConfig
