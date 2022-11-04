Feature: API tests

    I want to use the Energy API

    @Api @Api-001
    Scenario: The current energy quantities can be retrieved

        When I request the current energy quantities
        Then I receive a "200" response
        And I receive information for "Gas", "Electricity", "Nuclear" and "Oil"
        And each energy type has a price per unit
        And each energy type has a quantity of units
        And each energy type has a unique id
        And each energy type has the correct units

