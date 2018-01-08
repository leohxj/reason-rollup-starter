import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import bucklescript from 'rollup-plugin-bucklescript';

export default {
  input: 'src/index.re',
  plugins: [
    bucklescript({
      module: 'es6'
    }),
    alias({
      resolve: ['.re']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    resolve(),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**'
    })
  ]
}
