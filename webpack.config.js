const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

const loaders = {
  babel: {
    loader: 'babel-loader',
    options: {
      compact: false,
      cacheDirectory: !prod,
    },
  },
  svelte: {
    loader: 'svelte-loader',
    options: {
      css: false,
      emitCss: true,
      preprocess: require('svelte-preprocess')({
        babel: {
          presets: [
            [
              '@babel/preset-env',
              {
                loose: true,
                modules: false,
                targets: {
                  esmodules: true,
                },
              },
            ],
          ],
        },
      }),
    },
  },
  html: {
    loader: 'html-loader',
    options: { minimize: true },
  },
  styles: [
    prod ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers'),
        },
      },
    },
  ],
  url: {
    loader: 'url-loader',
    options: { limit: 8192 },
  },
};

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'inline-source-map',
  entry: {
    app: resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [loaders.html],
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules\/(?!svelte)/,
        use: [loaders.babel, loaders.svelte],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules[\/\\](?!svelte)/,
        use: [loaders.babel],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: loaders.styles,
      },
      {
        test: /\.(jpe?g|png|gif|bmp|svg)$/,
        use: [loaders.url],
      },
    ],
  },
  resolve: {
    alias: {
      svelte: resolve('node_modules', 'svelte'),
      'svelte-spa-router': resolve('node_modules', 'svelte-spa-router'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        collapseWhitespace: true,
      },
    }),
    ...(prod ? [new MiniCssExtractPlugin({ filename: '[name].css?[hash]' })] : []),
  ],
  optimization: {
    minimize: prod,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          safari10: true,
        },
      }),
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'static/[name].js?[hash]',
    chunkFilename: 'static/[name].[id].js?[hash]',
  },
};
