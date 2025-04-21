Feature: Direct Ferries booking tests

Scenario: 1 - Do not manage booking when when Email and Booking Reference not typed
    Given I am on the Booking page
    Then I see Email and Booking Reference errors on the Booking page

Scenario: 2 - Do not manage booking when when Email error appears
    Given I am on the Booking page
    Then I see Email error on the Booking page

Scenario: 3 - Do not manage booking when when Booking Reference error appears
    Given I am on the Booking page
    Then I see Booking Reference error on the Booking page

Scenario: 4 - Booking Not Found Modal appears when correct email and Booking Reference does not cause errors
    Given I am on the Booking page
    Then I see Booking Not Found modal