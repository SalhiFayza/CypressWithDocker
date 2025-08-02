import selectorsSearch from "../pageElements/searchSelsc";

class ProductSearch {

    assertHomePage() {
        cy.url().should('include', '/');
    }

    searchMyProduct(nameProd) {
        cy.get(selectorsSearch.btnProducts).click();
        cy.url().should('include', '/products');
        cy.get(selectorsSearch.inputSearch).type(nameProd);
        cy.get(selectorsSearch.btnSearch).click();
    }
    assertSearchResults(nameProd) {
        cy.get(selectorsSearch.productList).should("be.visible").window(() => {
            cy.get(selectorsSearch.titleProd).contains(nameProd).should("exist");
        });
    }
} export default new ProductSearch();