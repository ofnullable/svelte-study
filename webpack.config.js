const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'eval',
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: false,
            hotOptions: {
              optimistic: true,
            },
            preprocess: require('svelte-preprocess')({}),
          },
        },
      },
      {
        test: /\.css$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
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
