Feature: Test amazon website functionality

  Scenario: Check if user is redirected to the login page
    Given user is on homepage
    When user clicks sign in
    Then user is redirected to login page

  Scenario: Check if user is able to login using their credentials
    Given user is on the login page
    When user enters <username> and clicks on continue button
    Then user enters <password> and clicks on sign in button
    Then user is redirected to homepage

    Examples:
      | username      | password  |