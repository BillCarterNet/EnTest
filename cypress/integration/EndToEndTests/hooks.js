// Cucumber
import { Before, After } from "cypress-cucumber-preprocessor/steps";

// Page Objects
import BuyEnergyPage from "../../support/pageObjects/buyEnergyPage";

// Cypress config
import config from "../../../cypress.json";

// Scope
import scope from "../../support/scope";

// Feature
const feature = 'BuyEnergyPage';

Before({ tags: `@${feature}-001` }, () => {

    // Create scope property for test id
    const testId = `@${feature}-001`;
    scope[testId] = {};
    scope.testId = testId;

    // Here I would normally do any test set up
    // E.G. use the API/DB to ensure any necessary test data was in the correct/expected state for the test

    // Here however we just mimic that by clicking the reset button on the energy page
    cy.visit(`${config.baseUrl}Energy/Buy`);
    BuyEnergyPage.clickResetButton();

});

After({ tags: `@${feature}-001` }, () => {

    // Here I would normally do any test tear down

    // Here however we again just mimic that by clicking the reset button on the energy page
    cy.visit(`${config.baseUrl}Energy/Buy`);
    BuyEnergyPage.clickResetButton();

});