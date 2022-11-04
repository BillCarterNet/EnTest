# Test Plan

## Division

The testing will be divided into two main sections:
- API testing
- E2E testing

## Initial Approach

Without further information as to what is considered testable some initial time will be spent manually testing the site to document any defects and assess a suitable E2E test cases

Some time will also be spent manually testing the provided swagger page for the same reasons

Where an area is felt out of scope of testing but producing errors no defect shall be raised (e.g. Log In)

Everything else will be considered in scope unless specified

## Defects 

Defects are to be logged in the associated md file [Defects](./defects.md)

## Automation

Both layers will have some automation coverage

Both layers will use cypress for this task

The NPM package `cucumber-preprocessor` will also be used so that all tests can be specified in Gherkin BDD

This has limited the cypress version to 9.X.X as 10 (latest at time of writing) contains a number of breaking changes to this module

Tests will be specified in BDD in the associated feature files

## Out of scope

- Cross Browser Testing
- Device Testing
- Full HTML DOM analysis

## Resources

Swagger URL:
https://qacandidatetest.ensek.io/

Application URL:
https://ensekautomationcandidatetest.azurewebsites.net/

Videos have been provided of the automation test cases running in this directory cypress\videos
