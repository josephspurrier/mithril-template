// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import Path from 'path';

// Must be declared global to be detected by typescript (allows import/export).
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Reset the database.
       * @example
       * cy.resetDB()
       */
      resetDB(): Chainable<Window>;
    }
  }
}

Cypress.Commands.add('resetDB', () => {
  return cy
    .exec('echo Custom commands can go here.', {
      env: { CYPRESS: Path.resolve(__dirname) },
      timeout: 10000, // 10 seconds.
    })
    .its('code')
    .should('eq', 0);
});
