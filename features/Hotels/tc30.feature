Feature:  Sprint project

     Scenario: Verify invalid phone number error
        Given I am on hotels
        Then scroll to get app
        Then enter phone number
        Then click on get app 
        Then is error displayed
       