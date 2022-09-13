describe('Visual regression testing', () => {
    it('shows the hero image', () => {
        cy.visit('/');

        cy.matchImageSnapshot();
    });
});
