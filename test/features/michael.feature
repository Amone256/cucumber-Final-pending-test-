Feature: is it friday yet?
    Everyone whants to know when its Friday

    Scenario: Monday isnt Friday
        Given today is wednesday
        When I ask wether its Friday yet
        Then I should be told "Nope"

    Scenario: Friday is Friday
        Given today is Friday
        When I ask wether its Friday yet
        Then I should be told "TGIF"
    