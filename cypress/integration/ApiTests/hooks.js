// Cucumber
import { Before, After } from "cypress-cucumber-preprocessor/steps";

// Scope
import scope from "../../support/scope";

// Feature
const feature = 'Api';

Before({ tags: `@${feature}-001` }, () => {

    // Create scope property for test id
    const testId = `@${feature}-001`;
    scope[testId] = {};
    scope.testId = testId;

    // Here I would normally do any test set up
    // E.G. if we were testing reset we would probably want to ensure the current values were not already the default ones

});

After({ tags: `@${feature}-001` }, () => {

    // Here I would normally do any test tear down

    // E.G. If a note of initial values were taken maybe they could be restored here
    // I.e. ensuring the tests have made no change to the data

});