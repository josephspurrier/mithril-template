// Support SCSS files in TypeScript.
// https://medium.com/@thetrevorharmon/how-to-silence-false-sass-warnings-in-react-16d2a7158aff
declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}

// Support resetDB() command in Cypress files.
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.resetDB()
     */
    resetDB(): Chainable<Element>;
  }
}
