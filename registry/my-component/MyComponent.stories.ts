// registry/my-component/MyComponent.stories.ts

import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from './MyCompontent'

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  title: 'Example/MyComponent',
}
export default meta

type Story = StoryObj<typeof MyComponent>

export const Default: Story = {}
