import { defineConfig } from 'vite'

export default () => {
  return defineConfig({
    server: {
      strictPort: false,
    },
  })
}
