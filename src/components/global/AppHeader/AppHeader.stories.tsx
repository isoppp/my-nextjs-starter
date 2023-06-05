import { Meta, StoryObj } from '@storybook/react'

import { AppHeader } from './AppHeader'

export default {
  component: AppHeader,
} as Meta<typeof AppHeader>

export const Default: StoryObj<typeof AppHeader> = {
  args: {},
}
