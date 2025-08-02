import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addCartsActs from "../../pageObject/pageActions/addCartsActs";

Given(/^I view my product details$/, () => {
  addCartsActs.visitProductsPage();
});

When(/^I set quantity to (\d+) and add it to the cart$/, (qty) => {
  addCartsActs.setAndAdd(qty);
});

Then(/^I should see a confirmation modal$/, () => {
  addCartsActs.assertProdAdded();
});

When(/^I confirm the cart contains "([^"]*)" with quantity (\d+) and proceed to checkout$/, (name, qty) => {
  const expected = {
    name,
    qty,
    price: "Rs. 500",
  };
  addCartsActs.assertCartContents(expected);
});

Then(/^I should see the correct summary on the checkout page$/, () => {
  const expected = {
    name: "Blue Top",
    qty: 3,
    price: "Rs. 500",
  };
  addCartsActs.assertcheckoutSummary(expected);
});

When(/^I enter payment details "([^"]+)", "([^"]+)", "([^"]+)", "([^"]+)", "([^"]+)"$/, (name, cardNumber, cvc, expiryMonth, expiryYear) => {
  addCartsActs.paymentOffer(name, cardNumber, cvc, expiryMonth, expiryYear);
});

Then(/^I should see the order success message$/, () => {
  addCartsActs.assertOrderSuccess();
});
after(() => {
    cy.logout();
});