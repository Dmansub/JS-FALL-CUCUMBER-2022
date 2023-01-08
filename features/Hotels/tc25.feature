Feature:  Sprint project

     Scenario: Verify user can submit feedback after completing the feedback form
        Given I am on hotels
        And click on sign in  
        And click on feedback
        And click star rating
        And enter comment
        Then select option
        Then ever booked hotel
        Then what accomplished
        Then select submit button
        Then verify feedback message 