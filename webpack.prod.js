const { merge } = require('webpack-merge');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const path = require('path');
const glob = require('glob-all');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // clean: true,
  },
  plugins: [
    new CompressionPlugin(),
    new WebpackManifestPlugin({
      basePath: '/',
      fileName: 'manifest.webmanifest',
      seed: {
        short_name: 'A.R.S.',
        name: 'アニマルレスキュー宇宙',
        description: '犬・猫を主として、飼い主のいない動物たちの保護活動に取り組んでいます。三重県尾鷲市内で保護施設を運営しており、獣医師の協力を得て健康管理や避妊・去勢手術を適切に施しています。',
        icons: [{
          src: '/common/img/icons/icon-192.png',
          type: 'image/png',
          sizes: '192x192',
        },{
          src: '/common/img/icons/icon-512.png',
          type: 'image/png',
          sizes: "512x512"
        }],
        screenshots: [],
        display: 'minimal-ui',
        scope: '/',
        start_url: 'https://animal-rescue-sora.netlify.app/?utm_source=homescreen',
        background_color: '#6f8d1b',
        theme_color: '#f18b02',
      },
    }),
    new CssMinimizerPlugin(),
//    new PurgecssPlugin({
//      paths: glob.sync([
//      path.join(__dirname, './dist/docs/*.html'),
//      path.join(__dirname, './src/app/common/components/*.vue'),
//      path.join(__dirname, './src/app/common/components/**/*.vue'),
//      path.join(__dirname, './src/pug/docs/*.pug'),
//    ]),
//    safelist: [
//      /data-v-.*/,
//      /data-button.*/,
//      '.js',
//      '.no-js',
//      '.page-section--animal-01',
//      '.page-section--animal-02',
//      '.page-section--mono-tone-01',
//      '.page-section--full-view-width',
//      '.page-section--pale-tone-01',
//      '.page-section--pale-tone-02',
//      '.page-section--pale-tone-03',
//      '.swiper-button-lock',
//    ],
//  }),
  ],
  optimization: {
    minimize: true,
  },
});
