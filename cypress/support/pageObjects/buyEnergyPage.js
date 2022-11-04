class BuyEnergyPage {

    static enterUnitsToBuy(energyType, unitQuantity) {

        cy.get('td')
        // All rows have identical ids 
        // We are forced to use text (or order) to identify row
        // Going for text in this case
        .contains(energyType) 
        .parent('tr')
        .within(() => {
            cy.get('input[type="text"]')
            .scrollIntoView()
            .clear()
            .type(unitQuantity);
        });

    }

    static getUnitsAvailable(energyType) {

        cy.get('td')
        // As above
        .contains(energyType) 
        .parent('tr')
        .within(() => {
            cy.get('td')
            // Again we just have to count here
            // Ideally we want an id or attribute to use
            .eq(2)
            .scrollIntoView()
            .invoke('text')
            .then(text => {
                cy.wrap(text)
                .as('units');
            });
        });

    }

    static clickBuyButton(energyType) {

        cy.get('td')
        // As above
        .contains(energyType) 
        .parent('tr')
        .within(() => {
            cy.get('input[name="Buy"]')
            .scrollIntoView()
            .click();
        });

    }

    static clickResetButton() {

        cy.get('input[name="Reset"]')
        .scrollIntoView()
        .click();

    }

}

export default BuyEnergyPage;