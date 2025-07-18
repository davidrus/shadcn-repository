// registry/my-component/MyComponent.stories.ts

import type { Meta, StoryObj } from '@storybook/react'
import { AppSidebar } from './AppSidebar'

const meta: Meta<typeof AppSidebar> = {
  component: AppSidebar,
  title: 'Example/AppSidebar',
}
export default meta

type Story = StoryObj<typeof AppSidebar>

export const Default: Story = {}
