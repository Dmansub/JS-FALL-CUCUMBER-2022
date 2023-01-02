Feature: Sign Up

    Background:
        Given I am on facebook
        When I click on Create New Account

Scenario: Verify current date is displayed on Sign-Up form
        Then I verify current date is displayed in birthdate dropdown