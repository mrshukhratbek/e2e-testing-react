/// <reference types="Cypress" />

describe('my first e2e test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('render the site header', () => {
    // cy.visit('/');
    cy.contains('Emoji Search');
  });

  it('render the list of emojis', () => {
    // cy.visit('/');
    // cy.get('.component-emoji-result-row').should('have.length', 20);
    cy.get("[data-cy='emoji-row']").should('have.length', 20);
  });

  it('allows users to search for an emojis', () => {
    cy.get('input').type('sun');
  });
});
