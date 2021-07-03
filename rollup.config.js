import resolve from 'rollup-plugin-node-resolve'
import {terser} from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import clear from 'rollup-plugin-clear'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'Storage',
            globals: {
                'js-cookie': 'Cookies'
            }
        },
        {
            file: 'dist/index.js',
            format: 'iife',
            name: 'Storage',
            globals: {
                'js-cookie': 'Cookies'
            }
        },
        {
            file: 'dist/index.min.js',
            format: 'iife',
            name: 'Storage',
            globals: {
                'js-cookie': 'Cookies'
            },
            plugins: [
                terser()
            ]
        }
    ],
    plugins: [
        resolve(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        clear({
            targets: ['dist'],
            watch: true
        })
    ],
    external: ['js-cookie']
}
