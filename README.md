# mithril-template

**This repository is a template so you can fork it to create your own applications from it.**

This is a sample notepad application that uses Mithril with TypeScript. It does also support JSX (.jsx or .tsx file extensions) if you want to use it. This project is designed to show how modern, front-end development tools integrate. It takes a while to piece together your own tools for linting, building, testing, etc. so you can reference this to see how to get all these different tools set up and integrated.

You don't need a back-end to test this application because [Mock Service Worker (MSW)](https://mswjs.io/) intercepts requests and returns data.

This projects uses/supports:

- [Babel](https://babeljs.io/)
- [Bulma](https://bulma.io/)
- [Cypress](https://www.cypress.io/)
- [ESLint](https://eslint.org/)
- [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html)
- [Mithril](https://mithril.js.org/)
- [Mock Service Worker (MSW)](https://mswjs.io/)
- [npm](https://www.npmjs.com/)
- [Sass](https://sass-lang.com/libsass)
- [Storybook](https://storybook.js.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- [webpack](https://webpack.js.org/)
- [webpack DevServer](https://webpack.js.org/configuration/dev-server/)

# Quick Start

Below are the instructions to test the application quickly.

```bash
# Clone the repo.
git clone git@github.com:josephspurrier/mithril-template.git

# Change to the directory.
cd mithril-template

# Install the dependencies.
npm install

# Start the web server. Your browser will open to: http://locahost:8080.
npm start

# Run Cypress.
npm run cypress

# Run Storybook.
npm run storybook

# Lint the code.
npm run lint

# Fix the lint issues.
npm run lint-fix
```