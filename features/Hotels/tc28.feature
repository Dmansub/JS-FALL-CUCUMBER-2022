Feature:  Sprint project

     Scenario: Verify user can update number of guests on Home page
        Given I am on hotels
         Then click on travelers 
         Then click on children as '2'
         Then verify children age are '2'
         Then verify Plus-button is enabled
         Then verify Minus-button is enabled
         Then click on children as '6'
          Then verify children age are '6'
         Then verify Plus-button is enabled
         Then verify Minus-button is enabled 
         Then click on children as '5'
          Then verify children age are '5'
         Then verify Plus-button is enabled
         Then verify Minus-button is enabled 
   