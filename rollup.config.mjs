import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from '@el3um4s/rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import { readFileSync } from 'node:fs'

// Use import.meta.url to make the path relative to the current source file
// instead of process.cwd() For more info:
// https://nodejs.org/docs/latest-v16.x/api/esm.html#importmetaurl
const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)),
)

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-ts-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/dist',
          '**/node_modules',
          '**/__tests__',
          '**/*.test.ts',
          '**/*.test.tsx',
        ],
      }),
      postcss(),
      terser(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [Object.keys(packageJson.peerDependencies)],
    plugins: [dts()],
  },
]
