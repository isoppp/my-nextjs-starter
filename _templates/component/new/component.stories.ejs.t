---
to: <%= fullPath %>/component.stories.tsx
sh: cd <%= cwd %> && yarn run prettier --write <%= fullPath %>/component.stories.tsx
---
import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>'

type Props = ComponentProps<typeof <%= h.changeCase.pascal(name) %>>

export default {
  component: <%= h.changeCase.pascal(name) %>,
  title: 'shared/<%= h.changeCase.pascal(name) %>',
  argTypes: {}
} as Meta<Props>

const Template: Story<Props> = args => <<%= h.changeCase.pascal(name) %> {...args} />

export const Default = Template.bind({})
Default.args = {
}
