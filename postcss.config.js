module.exports = {
  map: true,
  plugins: [
    require('cssnano'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
  ],
};