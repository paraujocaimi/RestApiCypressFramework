import { reqres } from '../../../cypress';
import spok from 'cy-spok'


describe('Test jsonSchema', () => {


    beforeEach(() => {
        cy.request('GET', `${reqres}/users/2`, 'body')
            .as('idUser2');
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

    it("Validate Schema", () => {
        cy.get('@idUser2')
            .its('body.data')
            .should(spok({
                $topic: 'body.data',
                "id": spok.type('number'),
                "email": spok.string,
                "first_name": spok.string,
                "last_name": spok.string,
                "avatar": spok.string,
            }))
    })

});