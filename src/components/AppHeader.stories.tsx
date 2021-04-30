import AppHeader from './AppHeader'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  component: AppHeader,
  title: 'Layouts/AppHeader',
} as Meta

const Template: Story = () => <AppHeader />

export const Default = Template.bind({})
