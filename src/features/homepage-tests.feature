Feature: Direct Ferries homepage tests

Scenario: 1 - Popular operators appear on German site
    Given I am on the German homepage
    Then I see popular operators
  
Scenario: 2 - Top destinations appear on German site
    Given I am on the German homepage
    Then I see top destinations
    
Scenario: 3 - Latest offers appear on German site
    Given I am on the German homepage
    Then I see latest offers

Scenario: 4 - Popular operators appear on UK site
    Given I am on the UK homepage
    Then I see popular operators

Scenario: 5 - Top destinations appear on UK site
    Given I am on the UK homepage
    Then I see top destinations
    
 Scenario: 6 - Latest offers appear on UK site
    Given I am on the UK homepage
    Then I see latest offers 
  
Scenario: 7 - Popular operators appear on Italian site
    Given I am on the Italian homepage
    Then I see popular operators

Scenario: 8 - Top destinations appear on Italian site
    Given I am on the Italian homepage
    Then I see top destinations
    
 Scenario: 9 - Latest offers appear on Italian site
    Given I am on the Italian homepage
    Then I see latest offers 