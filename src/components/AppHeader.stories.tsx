import { Meta, Story } from '@storybook/react'
import React from 'react'

import AppHeader from './AppHeader'

export default {
  component: AppHeader,
  title: 'Layouts/AppHeader',
} as Meta

const Template: Story = () => <AppHeader />

export const Default = Template.bind({})
