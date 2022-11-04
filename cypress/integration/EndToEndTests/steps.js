// Cucumber
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Page Objects
import BuyEnergyPage from "../../support/pageObjects/buyEnergyPage";
import SalesConfirmPage from "../../support/pageObjects/saleConfirmedPage";

// Cypress config
import config from "../../../cypress.json";

// Scope
import scope from "../../support/scope";

// Steps
Given('I am on the {string} page', (page) => {

    let url;
    switch(page) {
        case 'Home Page':
            url = config.baseUrl;
        break;
        case 'About':
            url = `${config.baseUrl}Home/About`;
        break;
        case 'Contact':
            url = `${config.baseUrl}Home/Contact`;
        break;
        case 'Register':
            url = `${config.baseUrl}Account/Register`;
        break;
        case 'Login':
            url = `${config.baseUrl}Account/Login`;
        break;
        case 'Buy Energy':
            url = `${config.baseUrl}Energy/Buy`;
        break;
        case 'Sell Energy':
            url = `${config.baseUrl}Energy/Sell`;
        break;
    }
    cy.visit(url);

});

When('I enter {string} in the "Number of Units Required" field for {string}', (unitQuantity, energyType) => {

    BuyEnergyPage.enterUnitsToBuy(energyType, unitQuantity);

    // Store test data in our scope object
    const testId = scope.testId;
    scope[testId].energyType = energyType;
    scope[testId].enteredQuantity = unitQuantity;

});

And('there are at least {string} in the "Quantity of Units Available"', (units) => {

    // Tie test step to test data
    const testId = scope.testId;

    BuyEnergyPage.getUnitsAvailable(scope[testId].energyType);
    cy.get('@units')
    .then(units => {
        scope[testId].availableQuantity = units;
        expect(parseInt(units), 'We have enough quantity').to.be.at.least(parseInt(scope[testId].enteredQuantity));
    });

});

And('I click the "Buy" button for {string}', (energyType) => {

    BuyEnergyPage.clickBuyButton(energyType);
    
});

Then('I am taken to the "Sale Confirmed!" page', () => {

    // Tie test step to test data
    const testId = scope.testId;

    SalesConfirmPage.confirmHeaderIsPresent();
    SalesConfirmPage.confirmQueryString(
        scope[testId].energyType,
        parseInt(scope[testId].enteredQuantity),
        parseInt(scope[testId].availableQuantity) - parseInt(scope[testId].enteredQuantity),
    );

});

And('I see a thank you message with my purchased quantity and remaining store quantity', () => {

    // Tie test step to test data
    const testId = scope.testId;

    SalesConfirmPage.confirmSaleMessage(
        scope[testId].energyType,
        parseInt(scope[testId].enteredQuantity),
        parseInt(scope[testId].availableQuantity) - parseInt(scope[testId].enteredQuantity),
    );

});