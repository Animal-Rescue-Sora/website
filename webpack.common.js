const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    'common/js/bundle': './src/index.js',
  },
  output: {
    filename: '[name].min.js',
    chunkFilename: `common/js/chunks/[name].min.js`,
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/docs'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      }, {
        test: /\.(sc|c|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          }, {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: process.env.NODE_ENV === 'development' ? true : false,
              importLoaders: 2,
            },
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
              sourceMap: process.env.NODE_ENV === 'development' ? true : false,
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      }, {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'common/img',
          name: '[name].[ext]',
        },
      }, {
        test: /\.(jsx|js)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/dom7'),
          path.resolve(__dirname, 'node_modules/ssr-window'),
          path.resolve(__dirname, 'node_modules/swiper'),
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.scss',
      '.vue',
      '.html',
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'src/app'),
      '~pug': path.resolve(__dirname, 'src/pug'),
      '~docs': path.resolve(__dirname, 'dist/docs'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new StylelintPlugin({
      files: [
        '**/*.vue',
        '**/*.scss',
      ],
    }),
    new ESLintPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'common/css/style.min.css',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      https: true,
      open: 'external',
      port: 3000,
      notify: true,
      online: true,
      watchTask: true,
      server: {
        baseDir: './dist/docs',
        directory: true,
      },
      files: [
        './dist/docs/*.html',
        './dist/docs/**/*.html',
        './dist/docs/**/**/*.html',
        './dist/docs/common/css/*.css',
        './dist/docs/common/js/*.js',
      ],
    }),
  ],
};
