import selectorsCart from "../pageElements/addCart";

class AddCartActs {
    visitProductsPage() {
        cy.get(selectorsCart.viewProductLink).click();
        cy.url().should("contain", "/product_details/1");
        cy.get(selectorsCart.titleProd).should("have.text", "Blue Top");
    }
    setAndAdd(qty) {
        cy.get(selectorsCart.quantityInput).clear().type(qty);
        cy.get(selectorsCart.addToCartButton).click();
    }

    assertProdAdded() {
        cy.get(selectorsCart.modalContent).should("be.visible");
        cy.get(selectorsCart.modalTitle).should('contain.text', 'Added!');
        cy.get(selectorsCart.modalBody).should('contain.text', 'Your product has been added to cart.');
        cy.get(selectorsCart.viewCartLinkInModal).click();
    }
    assertCartContents(expected) {
        cy.url().should('contain', '/view_cart');
        cy.get(selectorsCart.cartTable).should('be.visible');
        cy.get(selectorsCart.cartRow).within(() => {
            cy.get(selectorsCart.cartDescription).should('contain.text', expected.name);
            cy.get(selectorsCart.cartQuantity).should('contain.text', expected.qty.toString());
            cy.get(selectorsCart.cartPrice).should('contain.text', expected.price);
        });
        cy.get(selectorsCart.proceedToCheckoutButton).click();


    }

    assertcheckoutSummary(expected) {
        cy.url().should('contain', '/checkout');
        cy.get(selectorsCart.checkoutCartTable).within(() => {
            cy.get('tbody tr').eq(0).within(() => {
                cy.get(selectorsCart.descriptionCheckout).should('contain.text', expected.name);
                cy.get(selectorsCart.tdQuantity).should('have.text', expected.qty.toString());
                cy.get(selectorsCart.tdPrice).should('contain.text', expected.price);
            });


        });
        cy.contains('a', 'Place Order').scrollIntoView().click();

    }
    paymentOffer(name, cardNumber, cvc, expiryMonth, expiryYear) {
        cy.url().should('contain', '/payment');
        cy.get(selectorsCart.nameOnCardInput).type(name)
        cy.get(selectorsCart.cardNumberInput).type(cardNumber);
        cy.get(selectorsCart.cvcInput).type(cvc);
        cy.get(selectorsCart.expiryMonthInput).type(expiryMonth);
        cy.get(selectorsCart.expiryYearInput).type(expiryYear);
        cy.get(selectorsCart.payButton).click();
    }

    assertOrderSuccess() {
        cy.url().should('include', '/payment_done');
        cy.get(selectorsCart.successMessage)
            .should('be.visible')
            .and('contain.text', 'Order Placed!');

        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    }

} export default new AddCartActs();