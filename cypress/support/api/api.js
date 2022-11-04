// Cypress config
import config from "../../../cypress.json";

const headers = {
    Authorization: 'Bearer eyJ0eXAiOiJ',
}

class Api {

    // Works without authentication
    static getEnergy() {
        return cy.request(`${config.apiBaseUrl}ENSEK/energy`);
    }

    // This requires authentication 
    // However I can't get it to work with the example provided
    static resetEnergy() {
        return cy.request({
            method: 'POST', 
            url: `${config.apiBaseUrl}ENSEK/reset`, 
            headers: headers,
        });
    }

    // The example bearer token does not appear to work
    // Is there some kind of auth endpoint?
    static getToken() {
        return cy.request({
            method: 'POST',
            url: `${config.apiBaseUrl}auth`,
            headers: headers
        });
    }

}

export default Api;