module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: { browsers: 'defaults, ie >= 11', node: 12 },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [['snowpack/assets/babel-plugin.js', {}]],
};
