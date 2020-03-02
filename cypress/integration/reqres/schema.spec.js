var spok = require('spok')

import { reqres } from '../../../cypress';

describe('API Testing with Cypress - Validate Schema', () => {

    beforeEach(() => {
        cy.request('GET', `${reqres}/users/2`).as('idUser2');
    });


    it('my object meets the specifications', () => {
        cy.get('@idUser2')
            .its('body.data')
            .wrap('body.data').should(
                spok({
                    // $topic: 'spok-example',
                    email: spok.type('string'),
                    first_name: spok.type('string'),
                    last_name: spok.type('string'),
                })
            );
    });
});