---
name: 'react-component'
root: './src'
output: ['components/*', 'features/*/components']
ignore: []
questions:
  name: 'Please enter component name.(Convert to Pascal case.)'
---

# {{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx

```markdown
import { FC } from 'react'

type Props = {}

export const {{ inputs.name | pascal }}: FC<Props> = ({}) => {
return <div>{{ inputs.name | pascal }}</div>
}
```

# {{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx

```markdown
import { Meta, StoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }} as Component } from './{{ inputs.name | pascal }}'

export default {
component: Component,
} as Meta<typeof Component>

export const Default: StoryObj<typeof Component> = {
args: {},
}
```
