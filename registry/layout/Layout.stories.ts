// registry/my-component/MyComponent.stories.ts

import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from './Layout'

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: 'Example/Layout',
}
export default meta

type Story = StoryObj<typeof Layout>

export const Default: Story = {}
