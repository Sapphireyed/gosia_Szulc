import babel from '@rollup/plugin-babel';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import prettier from 'rollup-plugin-prettier';
import notify from 'rollup-plugin-notify';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss';
//import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

const path = require('path');
const campaignName = path.basename(process.cwd());
const isProduction = process.env.NODE_ENV === 'production';
export const filesToCompile = ['main'];

const plugins = [
  notify(),
  nodeResolve(),
  postcss({
    inject: false,
    minimize: false,
    plugins: [autoprefixer({ grid: 'autoplace' })],
  }),
  scss(),
  html({
    include: '**/*.html',
    htmlMinifierOptions: {
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      minifyJS: true,
    },
  }),
  babel({
    babelHelpers: 'inline',
    exclude: 'node_modules/**',
    presets: [['@babel/preset-env', { targets: { node: 14 } }], '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-spread'],
    sourceMaps: true,
    inputSourceMap: true,
  }),
  commonjs(),
  prettier({
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: false,
    filepath: `dist/${campaignName}.js`,
  }),
  // replace({
  //   'process.env.NODE_ENV': JSON.stringify('production'),
  // }),
  isProduction && terser.terser(),
];

const createConfig = (filePath) => ({
  input: `${filePath}.js`,
  output: {
    file: `dist/main.js`,
    format: 'iife',
    globals: {
      test: 'window.lc.test',
    },
  },
  plugins,
});

const configs = filesToCompile.map((fileName) => createConfig(fileName));

export default configs;
