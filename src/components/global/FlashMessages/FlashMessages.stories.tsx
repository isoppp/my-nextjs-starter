import { Meta, StoryObj } from '@storybook/react'

import { FlashMessages } from './FlashMessages'

export default {
  component: FlashMessages,
} as Meta<typeof FlashMessages>

export const Default: StoryObj<typeof FlashMessages> = {
  args: {},
}
