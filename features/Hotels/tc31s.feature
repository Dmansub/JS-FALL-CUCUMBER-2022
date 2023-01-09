Feature:  Hotel language

    Feature Description

Scenario Outline: Verify user is able to change language
        Given I am on hotels
        When I change language to <languageOption>
        Then I verify language got changed to <language>
        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |