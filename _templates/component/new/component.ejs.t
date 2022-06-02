---
to: <%= fullPath %>/index.tsx
sh: cd <%= cwd %> && yarn run prettier --write <%= fullPath %>/index.tsx
---
import { FC<% if (hasChildren) { %>, ReactNode<% } %> } from 'react'
<% if (hasHooks) { %>import { use<%= h.changeCase.pascal(name) %> } from './hooks'<% } %>

type Props = {
  <% if (hasChildren) { %>children: ReactNode,<% } %>
}

export const <%= h.changeCase.pascal(name) %>: FC<Props> = ({
  <% if (hasChildren) { %>children,<% } %>
}) => {
  <% if (hasHooks) { %>const {} = use<%= h.changeCase.pascal(name) %>()<% } %>

  return (
    <div>
      <%= hasChildren ? '{children}' : h.changeCase.pascal(name) %>
    </div>
  )
}
