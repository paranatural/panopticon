import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const plugins = [
  alias({
    entries: [{ find: 'src', replacement: 'src' }],
  }),
  typescript(),
  image(),
]

const externalLibs = [
  '@mdi/js',
  '@mdi/react',
  '@radix-ui/colors',
  '@stitches/react',
  'effector',
  'effector-react',
  're-resizable',
  'react',
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
