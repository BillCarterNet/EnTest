class SalesConfirmPage {

    static confirmHeaderIsPresent() {

        cy.get('h2')
        // Not much other HTML to identify this page other than this text
        .contains('Sale Confirmed!')
        .should('be.visible');

    }

    static confirmQueryString(energyType, amountBought, amountLeft) {

        const queryString = `?` + 
            `amountBought=${amountBought}` + `&` +
            `energyType=${energyType}` + `&` +
            `amountLeft=${amountLeft}`;
        cy.url().should('include', queryString);

    }

    static confirmSaleMessage(energyType, amountBought, amountLeft) {

        const expectedMessage = 
            `Thank you for your purchase of ` + amountBought +
            ` units of ` + energyType + ` We have popped it in the post and it will be with you shortly.` +
            ` There are now ` + amountLeft +
            ` units of `+ energyType + ` left in our stores.`;
        cy.get('div.well')
        .invoke('text')
        .then(text => {
            // Need to tidy the text we get back (its a bit messy)
            const segments = text.split(/\r?\n/);
            let tidiedActualMessage = '';
            segments.forEach(segment => {
                if (segment.trim().length > 0) {
                    tidiedActualMessage = `${tidiedActualMessage} ${segment.trim()}`
                }
            });
            tidiedActualMessage = tidiedActualMessage.trim();
            expect(tidiedActualMessage, 'Sales confirmation message').to.eq(expectedMessage);
        });

    }

}

export default SalesConfirmPage;