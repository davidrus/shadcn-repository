import type { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../registry/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.base = '/shadcn-repository/storybook/'

    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../'),
      '@/registry': resolve(__dirname, '../registry'),
      '@/ui': resolve(__dirname, '../registry/ui'),
      '@/components': resolve(__dirname, '../registry/components'),
      '@/layout': resolve(__dirname, '../registry/layout'),
      '@/lib': resolve(__dirname, '../registry/lib'),
      // Mock pro react-i18next
      'react-i18next': resolve(__dirname, './mocks/react-i18next.ts'),
    }

    // Vite define plugin pro globální replacement
    config.define = {
      ...config.define,
      global: 'globalThis',
    }

    // Přidáme custom plugin pro mock
    config.plugins = config.plugins || []
    config.plugins.push({
      name: 'mock-react-i18next',
      resolveId(id) {
        if (id === 'react-i18next') {
          return resolve(__dirname, './mocks/react-i18next.ts')
        }
        return null
      },
    })

    return config
  },
}

export default config
