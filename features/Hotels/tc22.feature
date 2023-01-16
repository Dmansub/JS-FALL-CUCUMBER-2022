Feature:  Sprint project

     Scenario:  Verify error message for invalid data in SignUp form
        Given I am on hotels
        Then click on sign in  
        Then  click on sign up
        Then I type '#@4456' email 
        Then verify email error
        Then I enter '#$%@' in First name
        Then verify first name error
        Then I enter '#$%@' in Last name
        Then verify error for last name 
        Then enter account password 
        Then verify checkbox is displayed and enabled
        Then verify continue botton is displayed but not enabled