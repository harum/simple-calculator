import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
  },
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.iife.js',
      format: 'iife',
      name: 'myCalculator',
    },
    {
      file: 'dist/bundle.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'myCalculator',
    },
    {
      file: 'dist/bundle.system.js',
      format: 'system',
    }
  ],
  plugins: [ json() ],
}
