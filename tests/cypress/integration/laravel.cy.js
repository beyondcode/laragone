describe('Log-in as a user', () => {
    it('does not show a section when not logged in', () => {
        cy.visit('/');

        cy.get('[data-test="auth-section"]')
            .should('not.exist');
    });

    it('shows a section when logging in as a user', () => {
        cy.login({
            attributes: { name: 'Marcel' },
        });

        cy.visit('/');

        cy.get('[data-test="auth-section"]')
            .should('be.visible')
            .contains('Hey, Marcel!')
    });
});
