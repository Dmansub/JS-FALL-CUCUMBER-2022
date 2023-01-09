Feature:  Sprint project

     Scenario: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels
        And click on sign in  
        And click on feedback
        Then  click submit
        Then verify error message
        Then is star section in red dotted box
      
        