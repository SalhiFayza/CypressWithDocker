Cypress.Commands.add('login', () => {
    cy.fixture('dataLogin/data').then(({ email, password }) => {
        cy.visit('/login');
        cy.get("input[data-qa='login-email']").type(email);
        cy.get("input[data-qa='login-password']").type(password);
        cy.get("button[data-qa='login-button']").click();
        cy.url().should('include', '/');
    });
});
Cypress.Commands.add('logout', () => {
  cy.get("a[href='/logout']").click();
  cy.url().should('include', '/login');
});
