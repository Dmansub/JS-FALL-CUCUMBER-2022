Feature:  Sprint project

     Scenario: Verify filter-by and sort-by functionality works as expected
        Given I am on hotels
        When search 'Manhatten,NY' in bar
        When Enter Check-in date as Feb-10-2023
        When Enter Check-out date as Feb-16-2023
        When click on search button
        When click 5 star rating 
        When select price from dropdown