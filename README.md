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

# You don't need to use the Register page before logging in. To login, use:
# Username: jsmith@example.com
# Password: password

# Run Cypress tests in the CLI.
npm test

# Run Cypress tests in the UI.
npm run cypress

# Start the Storybook UI.
npm run storybook

# Lint the code.
npm run lint

# Fix the lint issues.
npm run lint-fix

# Generate a new mockServiceWorker.js file when you upgrade msw.
npx msw init .storybook/static/
```

# Features

## Babel

Babel will transform your code using the [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) and will also convert your JSX through webpack (webpack.config.js and .babelrc).

## Bulma

Bulma is a front-end framework that provides you with styled components and CSS helpers out of the box. This template also uses [Font Awesome](https://fontawesome.com/).

## Cypress

Cypress provides an easy-to-use end to end testing framework that launches a browser to do testing on your application. It can run from the CLI, or you can open up the UI and watch the tests live. It makes it really easy to debug tests that are not working properly. The config is in the cypress.json file, the support files are in the .cypress/support folder, and the main spec is here: src/e2e.spec.ts.

## ESLint and Prettier

ESLint and Prettier will work together to autoformat your code on save and suggest where you can improve your code (.estlintignore, .estlintrc.js, .prettierrc). It will work together with the Visual Studio ESLint extension as well. You will get a notification in VS Code when you first open the project asking if you want to allow the ESLint application to run from the node_modules folder - you should allow it so it can run properly.

## Mithril

Mithril is a fast and small framework that is easy to learn and provides routing and XHR utilities out of the box. You can use either HyperScript or JSX in this template.

## Mock Service Worker

This service worker will intercept your API calls so you don't need a back-end while developing. The mockServiceWorker.js file is copied to the root of your application by the webpack.config.js file. The src/helper/mock/browser.ts file is called by the /src/index.ts file when the application starts to turn on the service worker if the `__MOCK_SERVER__` variable is set to `true` in the webpack.config.js file. The /src/helper/mock/handler.ts file has all the API calls mocked when the application is running or being tested by Cypress. The Storybook files themselves each set their own responses if needed.

## Storybook

Storybook is a great way to build and test UI components in isolation:

- .storybook/main.js references setting from your main webpack.config.js file, sets the type of file that is considered stories (any file that ends in .stories.js - it can also end in ts, jsx, or tsx extension).
- .storybook/preview.js enables the console addon, includes the fontawesome icons, and includes the index.scss so you don't have to include it in every file. It also turns on the Mock Service Worker so all API calls can be intercepted and then returned data.

There are a lot of storybooks already included so take a look at how you can use the Controls addon with Mithril in the new Storybook v6 release.

## TypeScript

Many JavaScript projects now use TypeScript because it reduces code that you would have to write in JavaScript to validate the data you're passing in is of a certain type. The tsconfig.json and jsconfig.json tell your IDE and build tools which options you have set on your project. This project uses [ts-loader](https://github.com/TypeStrong/ts-loader) for webpack.

## Visual Studio Code

If you open this project in Visual Studio Code, you will get:

- extension recommendations for ESLint (.vscode/extensions.json)
- settings configured for ESLint linting and prettier auto-corrections (.vscode/settings.json)
- TypeScript code snippets for Mithril and arrow functions (.vscode/typescript.code-snippets)

## webpack

When you run `npm start`, webpack will provide linting via ESLint and live reloading (webpack.config.js).