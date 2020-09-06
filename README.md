# mithril-template ![Logo](https://user-images.githubusercontent.com/2394539/91363092-d0751c00-e7c9-11ea-87da-e34cb58af223.png)

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

# Lint the js/jsx/ts/tsx code using ESLint/Prettier.
npm run lint

# Fix the js/jsx/ts/tsx code using ESLint/Prettier.
npm run lint-fix

# Lint the css/scss code using stylelint.
npm run stylelint

# Fix the css/scss code using stylelint.
npm run stylelint-fix

# Generate a new mockServiceWorker.js file when you upgrade msw.
npx msw init .storybook/static/
```

# Features

## Babel

Babel will transform your code using the [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) and will also convert your JSX through webpack (webpack.config.js and .babelrc).

## Bulma

Bulma is a front-end framework that provides you with styled components and CSS helpers out of the box. This template also uses [Font Awesome](https://fontawesome.com/).

## SASS

[SASS](https://sass-lang.com/documentation/syntax) with the extension (.scss) is supported for both globally scoped (affects entire application) and locally scoped (namespaced for just the web component). The plugin, [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/), is used with [css-loader](https://webpack.js.org/loaders/css-loader/) and [sass-loader](https://webpack.js.org/loaders/sass-loader/). The css-loader is configured to use [CSS Modules](https://github.com/css-modules/css-modules).

Any `.scss` files will be treated as global and applied to the entire application like standard CSS. You can reference it like this from a web component: `import '@/file.scss';`. It's recommended to use the `:local(.className)` designation on top level classes and then nest all the other CSS so your styles are locally scoped to your web component. You can then reference it like this from a web component: `import style from '@/layout/side-menu/side-menu.scss';`. Any class names wrapped in `:local()` will be converted to this format: `[name]__[local]__[hash:base64:5]`. You can see how they are referenced in [side-menu.ts](/src/layout/side-menu/side-menu.ts). You must reference the `:local` class names in your TypeScript files using an import or the styles won't apply properly. You can see how this is done here: [side-menu.scss](src/layout/side-menu/side-menu.scss). It's recommended to use camelCase for the local class names because dashes make it a little more difficult to reference. You can read more about global vs local scope [here](https://webpack.js.org/loaders/css-loader/#scope). If you have any trouble using it, you can easily view the CSS output to see if names are namespaced or not.

To allow referencing CSS class names in TypeScript, there is a declaration.d.ts file that allows any class name to be used. It's in the `include` section of tsconfig.json file.

## Cypress

Cypress provides an easy-to-use end to end testing framework that launches a browser to do testing on your application. It can run from the CLI, or you can open up the UI and watch the tests live. It makes it really easy to debug tests that are not working properly. The config is in the cypress.json file, the support files are in the .cypress/support folder, and the main spec is here: src/e2e.spec.ts.

## ESLint, stylelint, Prettier

After testing a few combinations of tools, we decided to use the ESLint and stylelint VSCode extensions without using the Prettier VSCode extension. The interesting part is ESLint will still use Prettier to do auto-formatting which is why it's included in the package.json file. ESLint and Prettier will work together to autoformat your code on save and suggest where you can improve your code (.estlintignore, .estlintrc.json, .prettierrc). You will get a notification in VSCode when you first open the project asking if you want to allow the ESLint application to run from the node_modules folder - you should allow it so it can run properly. Stylelint is used for linting and auto-formatting any CSS and SCSS files.

## Favicon

The favicon was generated from the gracious [favicon.io](https://favicon.io/favicon-generator/?t=m&ff=Leckerli+One&fs=110&fc=%23FFF&b=rounded&bc=%2300d1b2).

## Mithril

Mithril is a fast and small framework that is easy to learn and provides routing and XHR utilities out of the box. You can use either HyperScript or JSX in this template.

## Mock Service Worker

This service worker will intercept your API calls so you don't need a back-end while developing. The mockServiceWorker.js file is copied to the root of your application by the webpack.config.js file. The src/helper/mock/browser.ts file is called by the /src/index.ts file when the application starts to turn on the service worker if the `__MOCK_SERVER__` variable is set to `true` in the webpack.config.js file. The /src/helper/mock/handler.ts file has all the API calls mocked when the application is running or being tested by Cypress. The Storybook files themselves each set their own responses if needed.

## Storybook

Storybook is a great way to build and test UI components in isolation:

- **.storybook/main.js** - references setting from your main webpack.config.js file, sets the type of file that is considered stories (any file that ends in .stories.js - it can also end in ts, jsx, or tsx extension).
- **.storybook/preview.js** - enables the console addon, includes the fontawesome icons, and includes the index.scss so you don't have to include it in every file. It also turns on the Mock Service Worker so all API calls can be intercepted and then returned data.

There are a lot of storybooks already included so take a look at how you can use the Controls addon with Mithril in the new Storybook v6 release.

## TypeScript

Many JavaScript projects now use TypeScript because it reduces code that you would have to write in JavaScript to validate the data you're passing in is of a certain type. The tsconfig.json and jsconfig.json tell your IDE and build tools which options you have set on your project. This project uses [ts-loader](https://github.com/TypeStrong/ts-loader) for webpack.

## Visual Studio Code

If you open this project in Visual Studio Code, you will get:

- extension recommendations for ESLint (.vscode/extensions.json)
- settings configured for ESLint linting and prettier auto-corrections (.vscode/settings.json)
- TypeScript code snippets for Mithril and arrow functions (.vscode/typescript.code-snippets)

These code snippets are included - just start typing and they should be in the auto-complete menu. A few of them support tabbing through the various fields:

- **mithril-closure** - Creates a closure component in Mithril.
- **mithril-storybook** - Creates a storybook component in Mithril.
- **arrow** - Creates an arrow function.
- **onclick** - Creates an onclick with an arrow function.
- **log** - Creates a console.log() statement.

## webpack

When you run `npm start`, webpack will provide linting via ESLint and live reloading (webpack.config.js). To compile faster, this template uses the [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) that runs the TypeScript type checker on a separate process. ESLint is also run on a separate process. You'll notice the `transpileOnly: true` option is set on the `ts-loader` in the webpack.config.js and the `ForkTsCheckerWebpackPlugin` is a plugin that handles the type checking and ESLint.

# Screenshots

Login screen.

![Login](https://user-images.githubusercontent.com/2394539/91362446-817ab700-e7c8-11ea-9078-c54879dcfe00.png)

Welcome screen.

![Welcome](https://user-images.githubusercontent.com/2394539/91362572-c69ee900-e7c8-11ea-80fc-2b8e993b449f.png)

Notepad screen.

![Notepad](https://user-images.githubusercontent.com/2394539/91362680-fea62c00-e7c8-11ea-9697-b291eb9c478e.png)