---
to: <%= fullPath %>/<%= h.changeCase.pascal(name) %>.tsx
sh: cd <%= cwd %> && yarn run prettier --write <%= fullPath %>/<%= h.changeCase.pascal(name) %>.tsx
---
<%
componentType = hasChildren ? 'FC' : 'VFC'
%>
import { <%= componentType %> } from 'react'

<% if (hasHooks) { %>
import { use<%= h.changeCase.pascal(name) %> } from './hooks'
<% } %>

type Props = {

}

const <%= h.changeCase.pascal(name) %>: <%= componentType %><Props> = ({
  <% if (hasChildren) { %>children,<% } %>
}) => {
  <% if (hasHooks) { %>const {} = use<%= h.changeCase.pascal(name) %>()<% } %>

  return (
    <div>
      <%= hasChildren ? '{children}' : h.changeCase.pascal(name) %>
    </div>
  )
}

export default <%= h.changeCase.pascal(name) %>
