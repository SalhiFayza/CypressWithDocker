Feature: Add product to cart and checkout
    As a logged-in user,
    I want to add a product to my shopping cart,
    so that I can purchase it later during checkout.

    Background: Search product
        Given I am on the homepage
        When I enter Blue Top into the search bar
        Then I should see my product Blue Top in the search results

    Scenario: Add product "Blue Top" with quantity 3 to cart and place order
        Given I view my product details
        When I set quantity to 3 and add it to the cart
        Then I should see a confirmation modal
        When I confirm the cart contains "Blue Top" with quantity 3 and proceed to checkout
        Then I should see the correct summary on the checkout page
        When I enter payment details "auto test", "4242424242424242", "123", "03", "2026"
        Then I should see the order success message

