import { terser } from 'rollup-plugin-terser'

import babel from '@rollup/plugin-babel'
import cleaner from 'rollup-plugin-cleaner'

export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/es/index.js',
            format: 'esm',
        },
        {
            file: 'dist/es/index.min.js',
            format: 'esm',
            plugins: [terser()],
        },
        {
            file: 'dist/index.js',
            format: 'umd',
            name: 'Storage',
            globals: {
                'js-cookie': 'Cookies',
            },
        },
        {
            file: 'dist/index.min.js',
            format: 'umd',
            name: 'Storage',
            globals: {
                'js-cookie': 'Cookies',
            },
            plugins: [terser()],
        },
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        cleaner({
            targets: ['dist'],
        }),
    ],
    external: ['js-cookie'],
    watch: {
        include: 'src/**',
    },
}
