Feature: Code Test
​
    # Score - 40
    @codeTest @codeTest-1
    Scenario Outline: Verify user is able to change language
        Given I am on hotels
        When I change langugage to <languageOption>
        Then I verify language got changed to <language>
​
        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |
​
    
