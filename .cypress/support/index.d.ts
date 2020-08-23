/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.resetDB('greeting')
     */
    resetDB(value: string): Chainable<Element>;
  }
}
