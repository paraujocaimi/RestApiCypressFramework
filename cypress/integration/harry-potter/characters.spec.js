import { characters } from '../../cypress.json'

describe('Validate response', () => {

    beforeEach(() => {
        cy.request('GET', `${characters}`).as('characters')
    });

    it('Validate the header', () => {
        cy.get('@characters')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('Validate the status code', () => {
        cy.get('@characters')
            .its('status')
            .should('equal', 200);
    });

    it('Validate the exits the name Hermione Grange ', () => {
        cy.get('@characters')
            .its('body')
            .should('include', { name: 'Hermione Grange' });
    });
});