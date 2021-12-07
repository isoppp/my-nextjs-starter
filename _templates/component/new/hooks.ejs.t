---
to: "<%= hasHooks ? `${fullPath}/hooks.tsx` : null %>"
sh: cd <%= cwd %> && yarn run prettier --write --no-error-on-unmatched-pattern <%= fullPath %>/hooks.tsx
---

<% if (hasHooks) { %>
export function use<%= h.changeCase.pascal(name) %>() {
  return {}
}
<% } %>
