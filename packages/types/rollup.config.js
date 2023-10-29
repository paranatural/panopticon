import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default defineConfig({
  input: 'src/index.ts',
  plugins: [typescript(), dts()],
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  }
})
