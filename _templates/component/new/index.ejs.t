---
to: <%= fullPath %>/index.tsx
sh: cd <%= cwd %> && pnpm run prettier --write <%= fullPath %>/index.tsx
---
import { FC } from 'react'
import { Presenter } from './Presenter'

type Props = {
}

export const <%= h.changeCase.pascal(name) %>: FC<Props> = ({
}) => {
  return <Presenter />
}
