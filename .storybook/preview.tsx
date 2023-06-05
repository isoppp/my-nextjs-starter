import '@/styles/global.css'
import { AppProviders } from '@/components/functions/providers/AppProviders'
import * as React from 'react'
import { StoryContext } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withProviders = (StoryFn: Function, context: StoryContext) => {
  return (
    <AppProviders>
      <StoryFn />
    </AppProviders>
  )
}

export const decorators = [withProviders]
