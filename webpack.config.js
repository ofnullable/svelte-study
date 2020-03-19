const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babelrc = require('./babel.config');

const mode = process.env.NODE_ENV || 'development';
const isProd = process.env.NODE_ENV === 'production';

const loaders = {
  babel: {
    loader: 'babel-loader',
    options: {
      compact: false,
      cacheDirectory: !isProd,
      babelrc: false,
      ...babelrc,
    },
  },
  svelte: {
    loader: 'svelte-loader',
    options: {
      css: false,
      emitCss: true,
      preprocess: require('svelte-preprocess')({}),
    },
  },
  html: {
    loader: 'html-loader',
    options: { minimize: true },
  },
  style: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
};

module.exports = {
  devtool: isProd ? 'hidden-source-map' : false,
  mode,
  entry: {
    app: path.join(__dirname, 'src/main.js'),
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
        use: loaders.style,
      },
      {
        test: /\.(jpe?g|png|gif|bmp|svg)$/,
        use: [{ loader: 'url-loader', options: { limit: 8192 } }],
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      'svelte-spa-router': path.resolve('node_modules', 'svelte-spa-router'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    ...(isProd ? [new MiniCssExtractPlugin({ filename: '[name].css?[hash]' })] : []),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js?[hash]',
    chunkFilename: '[name].[id].js?[hash]',
  },
};
