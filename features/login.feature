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
      | +919778310928 | Ajoe@3426 |

  Scenario: User wants to explore Deals
    Given user is already on the homepage
    When user clicks Today's Deals button
    Then user is redirected to Deals page

  Scenario: User selects first item on deals page
    Given user is on the deals page
    When user selects the first product
    Then user is redirected to product description page

  Scenario: User adds product to cart
    Given user is on the product description page
    When user clicks add to cart button
    Then user clicks view cart button
    Then cart is displayed


