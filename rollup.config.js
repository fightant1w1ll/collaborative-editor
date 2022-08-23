import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'src/client/index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    builtins(),
    resolve(), // tells Rollup how to find libraries in node_modules
    commonjs(), // converts commonjs modules to ES modules
    html({
      title: 'Collaborative Editor',
    }),
  ],
};
