---
to: <%= fullPath %>/Presenter.tsx
sh: cd <%= cwd %> && pnpm run prettier --write <%= fullPath %>/Presenter.tsx
---
import { FC } from 'react'

type Props = {
}

export const Presenter: FC<Props> = ({
}) => {
  return (
    <div>
      <%= h.changeCase.pascal(name) %>
    </div>
  )
}
