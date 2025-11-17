import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: {
      html: true,
      css: true,
      markdown: true,
    },
    typescript: true,
  },
  {
    files: [
      'test/**/*',
    ],
    rules: {
      'no-console': 'off',
    },
  },
)
