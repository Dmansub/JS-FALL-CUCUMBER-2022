Feature:  Sprint project

     Scenario: Verify user can update number of guests on Home page
        Given I am on hotels
        Then click on sign in  
        Then click on the sign in button
        When I type '345@dol.com' as email
        Then enter invalid password
        Then click sign in btn
        Then verify error message is displayed