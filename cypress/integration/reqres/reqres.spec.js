import { reqres } from '../../../cypress';

describe('API Testing with Cypress', () => {

    beforeEach(() => {
        cy.request('GET', `${reqres}/users`).as('users');
    });

    it('Validate the header for @user', () => {
        cy.get('@users')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('Validate the status code', () => {
        cy.get('@users')
            .its('status')
            .should('equal', 200);
    });

    it('If page 1 exits', () => {
        cy.get('@users')
            .its('body')
            .should('include', { page: 1 });
    });

});