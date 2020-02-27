module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        corejs: 3,
        debug: true,
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining'],
};
