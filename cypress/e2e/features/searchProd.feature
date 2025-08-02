Feature: Search product

    As a logged-in user,
    I want to search for a product,
    So that I can find the product I'm looking for easily.

    Scenario: Search product
        Given I am on the homepage
        When I enter Blue Top into the search bar
        Then I should see my product Blue Top in the search results
