
Feature:  Trailer Extract Stubbed API for DVA

  Scenario: AC1.1 fetch all trailer details
    Given I am an API Consumer
    And I provide a trailerId as a path parameter
    When I send a GET request to localhost/dva-trailer-details/{trailerId}
    Then the the system returns a trailerDetail stub
    And the system returns an HTTP status code 200 OK