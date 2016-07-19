import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'lib/index.js',
  plugins: [
    babel(),
    nodeResolve({
      main: true,
      jsnext: true,
      preferBuiltins: false,
    }),
  ],
  targets: [
    { dest: 'dist/index.es5.js', format: 'cjs' },
    { dest: 'dist/index.es6.js', format: 'es' }
  ]
};
