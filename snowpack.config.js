const common = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json');
const babel = require('rollup-plugin-babel');
const progress = require('rollup-plugin-progress');
module.exports = {
  // installOptions: {
  //   include: 'src/**/*.{js,jsx,ts,tsx}',
  // },
  webDependencies: [
    'react',
    'react-dom',
    'react-router-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'redux-logger',
    'prop-types',
    'history',
  ],
  // rollup: {
  //   plugins: [
  //     progress({ clearLine: false }),
  //     resolve({ browser: true }),
  //     json(),
  //     common({
  //       include: ['node_modules/**'],
  //       exclude: ['node_modules/process-es6/**'],
  //       namedExports: {
  //         'node_modules/react/index.js': [
  //           'Children',
  //           'Component',
  //           'PropTypes',
  //           'createElement',
  //         ],
  //         'node_modules/react-dom/index.js': ['render'],
  //       },
  //     }),

  //     babel({
  //       babelrc: false,
  //       exclude: 'node_modules/**',
  //       presets: [
  //         '@babel/preset-env',
  //         [
  //           '@babel/preset-env',
  //           {
  //             modules: 'false',
  //             targets: {
  //               browsers: '> 1%, IE 11, not op_mini all, not dead',
  //               node: 12,
  //             },
  //           },
  //         ],
  //         '@babel/preset-react',
  //       ],
  //       plugins: ['@babel/plugin-external-helpers'],
  //     }),
  //   ],
  // },
};
