---
to: <%= fullPath %>/Presenter.stories.tsx
sh: cd <%= cwd %> && yarn run prettier --write <%= fullPath %>/Presenter.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react'

import { Presenter } from './Presenter'

export default {
  component: Presenter,
} as Meta<typeof Presenter>

export const Default: StoryObj<typeof Presenter> = {
  args: {},
}
