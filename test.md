import selectors from './selectors';

class ProductActions {
  visitProductsPage() {
    cy.visit(selectors.productsPage);
    cy.url().should('include', selectors.productsPage);
  }

  viewProduct(name) {
    // Find product card by name and click "View Product"
    cy.get(selectors.productCard)
      .contains(name)
      .parents('.product-image-wrapper')
      .find(selectors.viewProductLink)
      .click();
  }

  setQuantity(qty) {
    cy.get(selectors.quantityInput).clear().type(qty);
  }

  addToCart() {
    cy.get(selectors.addToCartButton).click();
  }

  assertModalAdded() {
    cy.get(selectors.modalContent).should('be.visible');
    cy.get(selectors.modalTitle).should('contain.text', 'Added!');
    cy.get(selectors.modalBody).should('contain.text', 'Your product has been added to cart.');
  }

  clickViewCartFromModal() {
    cy.get(selectors.viewCartLinkInModal).click();
  }

  assertCartContents(expected) {
    cy.url().should('include', '/view_cart');

    cy.get(selectors.cartTable).should('be.visible');
    cy.get(selectors.cartRow).within(() => {
      cy.get(selectors.cartDescription).should('contain.text', expected.name);
      cy.get(selectors.cartQuantity).should('have.text', expected.qty.toString());
      cy.get(selectors.cartPrice).should('contain.text', expected.price);
    });
  }

  proceedToCheckout() {
    cy.get(selectors.proceedToCheckoutButton).click();
  }

  assertCheckoutSummary(expected) {
    cy.url().should('include', '/checkout');

    cy.get(selectors.checkoutCartTable).within(() => {
      cy.get('tbody tr').eq(0).within(() => {
        cy.get('td.cart_description h4 a').should('contain.text', expected.name);
        cy.get('td.cart_quantity button.disabled').should('have.text', expected.qty.toString());
        cy.get('td.cart_price p').should('contain.text', expected.price);
      });
      cy.get('tbody tr').eq(1).within(() => {
        cy.get('td').eq(4).should('contain.text', `Rs. ${expected.qty * parseInt(expected.price.replace(/[^\d]/g, ''))}`);
      });
    });
  }

  placeOrder(cardNumber, expiryDate, cvc) {
    cy.url().should('include', '/payment');
        cy.wait(6000)
        cy.get(selectorsOffer.idStripe).within(() => {
            cy.fillElementsInput(selectorsOffer.inputCardNumber, cardNumber);
            cy.wait(6000);

            cy.fillElementsInput(selectorsOffer.inputDate, expiryDate);
            cy.wait(6000);

            cy.fillElementsInput(selectorsOffer.inputCVC, cvc);
        });
    cy.get(selectors.payButton).click();
  }

  assertOrderSuccess() {
    cy.get(selectors.successMessage).should('be.visible').and('contain.text', 'Your order has been placed successfully!');
  }
}

export default new ProductActions();
