---
to: "<%= hasHooks ? `${fullPath}/hooks.tsx` : null %>"
sh: cd <%= cwd %> && yarn run prettier --write --no-error-on-unmatched-pattern <%= fullPath %>/hooks.tsx
---
import { ComponentProps } from 'react'
import { <%= h.changeCase.pascal(name) %> } from './'

type Props = ComponentProps<typeof <%= h.changeCase.pascal(name) %>>

<% if (hasHooks) { %>
export function use<%= h.changeCase.pascal(name) %>({}: Props) {
  return {}
}
<% } %>
