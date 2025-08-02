import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import searchActs from "../../pageObject/pageActions/searchActs";
Before(() => {
    cy.login();
});

Given(/^I am on the homepage$/, () => {
    searchActs.assertHomePage();
});

When(/^I enter (.*) into the search bar$/, (nameProd) => {
    searchActs.searchMyProduct(nameProd);
});

Then(/^I should see my product (.*) in the search results$/, (nameProd) => {
    searchActs.assertSearchResults(nameProd);
});