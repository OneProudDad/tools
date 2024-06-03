# Tools

For most of my career I have worked for corporations that prohibited me from contributing to open source. I am no longer bound by that, and wanted to just create a simple React App that has a few useful tools.

## Why Vite

In my experience Vite is the quickest way to spin up a new frontend project.

There has been a lot of noise about Server Side Rendering frameworks and the like, but unless you have control of the backend tech as well as the frontend tech, they end up introducing more headaches than they solve. Often I find that all I really need is a simple React app, and Vite provides the best developer experience that I have found to date. I haven't played around with the new React + SWC combination, and reserve the right to do so at some point in the future and change this, but for now the simple react-ts template is great.

## Why PNPM
I have played with early iterations of yarn and found it to be less stable than the basic npm. When I heard about pnpm I was likewise skeptical. After having installed it and played with it - I admit it still has some warts (like the warning message you get about your pnpm version that doesn't get solved by the suggested upgrade command) but in general I find that it is much faster than NPM, and more importantly for my purposes, it communicates with clear error, warning, and info messages that helps to save hours of engineering time.

# Change Log

## 0.1.1
Adjusting file naming and moving the app code into an app folder - additionally moving the index.css to that app folder and renaming it to base.css

## 0.1.0
Initial Vite app

# Vite Template Notes
## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
