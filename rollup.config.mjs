import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.global.js',
        name: 'xyStorage',
        format: 'iife',
        plugins: [
          terser(),
        ],
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
    ],
    plugins: [
      del({ targets: 'dist' }),
      typescript(),
      resolve(),
      commonjs(),
      // babel({
      //   babelHelpers: 'bundled',
      //   exclude: ['node_modules/**'],
      //   extensions: ['.ts'],
      //   presets: ['@babel/preset-env'],
      // }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'cjs',
      },
    ],
    plugins: [
      dts(),
    ],
  },
]
