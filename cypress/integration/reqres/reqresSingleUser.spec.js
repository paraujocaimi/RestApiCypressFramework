import { reqres } from '../../../cypress';

describe('API Testing with Cypress', () => {

    beforeEach(() => {
        cy.request('GET', `${reqres}/users/2`).as('idUser2');
    });

    it('Validate the header for 2', () => {
        cy.get('@idUser2')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('Validate the status code', () => {
        cy.get('@idUser2')
            .its('status')
            .should('equal', 200);
    });

    it('Validate single user', () => {
        cy.get('@idUser2')
            .its('body.data')
            .should('include', { email: "janet.weaver@reqres.in" })
            .should('include', { first_name: "Janet" })
            .should('include', { last_name: "Weaver" })
    });

});