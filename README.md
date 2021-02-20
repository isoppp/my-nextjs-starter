## Features

- Next.js + Typescript
- ESLint + Prettier + Husky + ling-staged
- TailwindCSS + Plugins + configs
- Recoil for global store
- react-query for fetching data

## Setup Steps

```bash
# Initialize NPM project using yarn
yarn init

# Add Next.js dependencies
yarn add next react react-dom

# Add Typescript dependencies
yarn add typescript @types/react @types/node

# Add index.tsx to pages/

# Add ESLint
yarn add --dev eslint @typescript-eslint/parser  @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y 

# Add prettier
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier

# Add .eslintrc.js and .prettierrc.js

# Add husky lint-staged
yarn add --dev husky lint-staged

# Add tailwindcss
yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest

# Init tailwindcss config
npx tailwindcss init -p

# Add tailwindcss plugins
yarn add --dev tailwind-css-variables @tailwindcss/custom-forms @tailwindcss/aspect-ratio

# Add recoil
yarn add recoil

# Add react-query
yarn add react-query
```

## Optional Libraries and Reference 

- Awesome manual setup guide https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
- Chakra UI: https://chakra-ui.com/docs/getting-started
- Jest(example project): 
  - https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
  - https://github.com/pankod/next-boilerplate/
- Storybook(example project): https://github.com/pankod/next-boilerplate
