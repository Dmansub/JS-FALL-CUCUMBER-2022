Feature:  Sprint project

     Scenario: Verify past dates and back button on Current month's calendar is disabled
        Given I am on hotels
        When I clicked dates 
        Then I verify current month is displayed
