import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { readPackageUpSync } from 'read-pkg-up'
import dts from 'rollup-plugin-dts'
import Module from 'module'

const packageJson = readPackageUpSync({ normalize: true }).packageJson

export default defineConfig([{
  input: 'src/index.ts',
  plugins: [typescript()],
  output: [{
    file: 'dist/index.js',
    format: 'es',
  }],
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
    ...Module.builtinModules.map(m => `node:${m}`)
  ],
}, {
  input: 'src/index.ts',
  plugins: [typescript(), dts()],
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
    ...Module.builtinModules.map(m => `node:${m}`)
  ],
}])
