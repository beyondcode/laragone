import Speaker from '@/Components/Speaker.vue';
import {setActivePinia, createPinia } from "pinia";
import { createTestingPinia } from '@pinia/testing'
import sinon from 'sinon'

const speaker = {
    name: "Marcel Pociot",
    title: "CTO @ Beyond Code",
    twitter: "https://twitter.com/marcelpociot",
    image: "marcel-pociot.jpg",
};

describe('Speaker component', () => {
    it('does not show the speaker image if it was not found yet', () => {
        cy.mount(() => <Speaker speaker={speaker} />, {
            global: {
                plugins: setActivePinia(createPinia()),
            }
        })

        cy.get('img').should('not.exist')
        cy.get('span').contains('Lecram Toicop');
    })


    it('shows the speaker image when it was found', () => {
        cy.mount(() => <Speaker speaker={speaker} />, {
            global: {
                plugins: createTestingPinia({
                    createSpy: sinon.spy,
                    initialState: {
                        speaker: {
                            found: ['Marcel Pociot']
                        }
                    }
                }),
            },
        })

        cy.get('img').should('be.visible')
            .should('have.attr', 'src')
            .should('include', 'marcel-pociot.jpg')

        cy.get('span').contains('Marcel Pociot');
    })
})
