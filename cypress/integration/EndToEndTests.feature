Feature: Buy Energy Page

    I want to use the Buy Energy page

    @E2E @BuyEnergyPage-001
    Scenario Outline: A user can buy "<Units>" of "<Energy_Type>"

        Given I am on the "Buy Energy" page
        When I enter "<Units>" in the "Number of Units Required" field for "<Energy_Type>"
        And there are at least "<Units>" in the "Quantity of Units Available"
        And I click the "Buy" button for "<Energy_Type>"
        Then I am taken to the "Sale Confirmed!" page
        And I see a thank you message with my purchased quantity and remaining store quantity

        Examples:
        | Energy_Type | Units |
        | Gas         | 1500  |
        # | Nuclear     | 0     |
        | Electricity | 4322  |
        | Oil         | 10    |

# NOTE 
# The Nuclear example is commented out as after a UI reset the available quantity is zero
# I would normally however have some sort of test set up ensuring this is not the case
# I.e. the purchasing of each type could be tested by this scenario
# Any testing relating to a quantity being zero (or reduced to zero) would be handled in a different scenario