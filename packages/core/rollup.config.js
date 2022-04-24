import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const plugins = [
  alias({
    entries: [{ find: 'src', replacement: 'src' }],
  }),
  typescript(),
]

const externalLibs = [
  'react',
  '@stitches/react',
  '@radix-ui/colors',
  '@mdi/js',
  '@mdi/react',
]

export default defineConfig([{
  input: 'src/index.ts',
  plugins: [...plugins],
  output: [{
    file: 'dist/index.js',
    format: 'es',
  }],
  external: externalLibs
}, {
  input: 'src/index.ts',
  plugins: [...plugins, dts()],
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  external: externalLibs
}])
