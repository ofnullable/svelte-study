const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const isProd = process.env.NODE_ENV === 'production';

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
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(m?js)$/,
        exclude: /(node_modules)(?!.svelte)/,
        loader: 'babel-loader',
      },
      {
        test: /\.svelte$/,
        exclude: /(node_modules)(?!.svelte)/,
        use: [
          'babel-loader',
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
              preprocess: require('svelte-preprocess')({}),
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
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
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      'svelte-spa-router': path.resolve('node_modules', 'svelte-spa-router'),
    },
    extensions: ['.mjs', '.js', '.html', '.svelte'],
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
