Feature: Direct Ferries Sign In tests

Scenario: 1 - Do not Sign In when error message appears
    Given I am on the Sign In page
    Then I see error message when trying to Sign In with incorrect inputs