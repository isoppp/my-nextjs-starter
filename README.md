## Features

- Next.js + Typescript
- ESLint + Prettier + Husky + ling-staged
  
- Chakra UI + TailwindCSS with plugins and configs
- Recoil + clsx
- react-query for fetching data

- Storybook

## Setup Steps

```bash
# Initialize NPM project using yarn
yarn init

# Add Next.js dependencies
yarn add next react react-dom

# Add Typescript dependencies
yarn add --dev typescript @types/react @types/node

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

# To use createPortal
yarn add react-dom
yarn add -D @types/react-dom

# Add clsx
yarn add clsx

# Add Chakra UI
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion

# Add Storybook (run the command and then edit files)
npx sb init

```

## Optional Libraries and Reference 

- Awesome manual setup guide https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
- Jest(example project): 
  - https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
  - https://github.com/pankod/next-boilerplate/
