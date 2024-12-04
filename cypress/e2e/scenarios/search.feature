Feature: Search
  Scenario: Check the list of suggestion shows after typing
    Given I visit the weather app
    When I type "London" in the search field
    Then I should see 5 options that appear with "London" 

  Scenario: Check the list of suggestion do not display for 1 or 2 characters
    Given I visit the weather app
    When I type "Lo" in the search field
    Then I should not see the list of suggestion

  Scenario: Check the list suggestion shows after typing 3 characters
    Given I visit the weather app
    When I type "New" in the search field
    Then I should see 5 options that appear with "New" 

  Scenario: Check the list suggestion is not displayed after clearing the search field
    Given I visit the weather app
    When I type "New" in the search field
    And I clear the search field
    Then I should not see the list of suggestion

  Scenario: Check the user can see the forecast after selecting a location
    Given I visit the weather app
    When I type "London" in the search field
    And I select the first option in the search field
    Then I should see the forecast for that location

    
