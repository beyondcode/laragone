describe('Find Speakers', () => {
    it('shows confetti after clicking on a speaker', () => {
        cy.visit('/');

        cy.get('canvas').should('not.exist');

        cy.get('[data-test="hero-map"]')
            .trigger('mousemove', {
                clientX: 925,
                clientY: 379,
            })
            .click(925,379);

        cy.get('canvas').should('exist');
    });











    // it('Clicking on a speaker again shows no confetti', () => {
    //     cy.visit('/');
    //
    //     cy.get('[x-data="follow"]')
    //         .trigger('mousemove', {
    //             clientX: 925,
    //             clientY: 379,
    //         })
    //         .click(925,379);
    //
    //     cy.wait(4000);
    //
    //     cy.get('[x-data="follow"]')
    //         .trigger('mousemove', {
    //             clientX: 925,
    //             clientY: 379,
    //         })
    //         .click(925,379);
    //
    //     cy.get('canvas').should('not.exist');
    // });
});
