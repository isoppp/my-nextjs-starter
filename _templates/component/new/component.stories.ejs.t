---
to: <%= fullPath %>/<%= h.changeCase.pascal(name) %>.stories.tsx
sh: cd <%= cwd %> && yarn run prettier --write <%= fullPath %>/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react'

import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>'

export default {
  component: <%= h.changeCase.pascal(name) %>,
} as Meta<typeof <%= h.changeCase.pascal(name) %>>

export const Default: StoryObj<typeof <%= h.changeCase.pascal(name) %>> = {
  args: {},
}
