Feature: Feature name

    Feature Description
Scenario Outline: Verify weak password messages
        Given I am on hotels
        And  click on sign in
        And  click on sign up
        When I enter 'user@test.com' as email 
        When I enter 'fUser' in First name
        When I enter 'lUser' in Last name
        When I enter <password> in Password
       # And I verify <msg1> message is displayed
      #  And I verify <msg2> message is displayed

    Examples:
            | password | msg1                                | msg2                             |
            | abcd     | Includes 8-64 characters            | Combines letters and numbers     |
            | abcd@123 | Add more words that are less common | Avoid common character sequences |