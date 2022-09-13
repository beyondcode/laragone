import Button from '@/Components/Button.vue';

describe('Button component', () => {

    it('it can show a button', () => {
        cy.mount(() => <Button>Content</Button>)

        cy.get('button')
            .should('have.text', 'Content')
    })
})
