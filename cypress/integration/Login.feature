Feature: Login

  I want to login into Conduit
  
  @focus
  Scenario: Conduit login
    Given I open Conduit login Page
    When I type in
        | username | password |
        | urmila.ghadiya@gmail.com | Urmi@123 |
    And I click on Sign in button
    Then "Your Feed" should be shown