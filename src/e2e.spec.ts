describe('test the full application', () => {
  before(() => {
    cy.resetDB();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('auth');
  });

  it('loads the home page', () => {
    cy.clearCookie('auth');
    cy.visit('http://localhost:8080');
    cy.contains('Login');
  });

  it('registers a new user', () => {
    cy.visit('/register');

    cy.get('[data-cy=first_name]').type('John').should('have.value', 'John');
    cy.get('[data-cy=last_name]').type('Smith').should('have.value', 'Smith');
    cy.get('[data-cy=email]')
      .type('jsmith@example.com')
      .should('have.value', 'jsmith@example.com');
    cy.get('[data-cy=password]')
      .type('password')
      .should('have.value', 'password');
    cy.get('[data-cy=submit]').click();
  });

  it('login with the user', () => {
    cy.visit('/');

    cy.contains('Login');
    cy.get('[data-cy=email]')
      .type('jsmith@example.com')
      .should('have.value', 'jsmith@example.com');
    cy.get('[data-cy=password]')
      .type('password')
      .should('have.value', 'password');
    cy.get('[data-cy=submit]').click();
    cy.contains('Login successful.');
  });

  it('navigate to note page', () => {
    cy.visit('/');

    cy.contains('Welcome');
    cy.url().should('include', '/');
    cy.get('[data-cy=notepad-link]').click();
    cy.url().should('include', '/notepad');
    cy.contains('To Do');
  });

  it('add a note', () => {
    cy.visit('/notepad');

    cy.get('[data-cy=note-text]')
      .type('hello world')
      .should('have.value', 'hello world')
      .type('{enter}');

    cy.url().should('include', '/note');

    cy.get('#listTodo').find('li').should('have.length', 1);
  });

  it('add a 2nd note', () => {
    cy.get('[data-cy=note-text]')
      .type('hello universe')
      .should('have.value', 'hello universe')
      .type('{enter}');

    cy.url().should('include', '/note');

    cy.get('#listTodo').find('li').should('have.length', 2);

    cy.get('#listTodo>li')
      .eq(0)
      .find('input')
      .should('have.value', 'hello world');

    cy.get('#listTodo>li')
      .eq(1)
      .find('input')
      .should('have.value', 'hello universe');
  });

  it('edit the 2nd note', () => {
    cy.get('#listTodo>li')
      .eq(1)
      .find('input')
      .type(' foo')
      .should('have.value', 'hello universe foo');
  });

  it('delete the 1st note', () => {
    cy.get('#listTodo>li').eq(1).find('[data-cy=delete-note-link]').click();
    cy.get('#listTodo').find('li').should('have.length', 1);
  });

  it('delete the last note', () => {
    cy.get('#listTodo>li').eq(0).find('[data-cy=delete-note-link]').click();
    cy.get('#listTodo').find('li').should('have.length', 0);
  });
});
