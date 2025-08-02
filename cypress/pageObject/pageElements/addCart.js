const selectorsCart = {

    viewProductLink: '.choose ul li a',
    titleProd: '.product-information > h2',
    // Product detail page
    quantityInput: 'input[name="quantity"]',
    addToCartButton: 'button.btn.btn-default.cart',

    // Modal after adding to cart
    modalContent: '.modal-content',
    modalTitle: '.modal-title',
    modalBody: '.modal-body p',
    viewCartLinkInModal: '.modal-body a',

    // Cart page
    cartTable: '#cart_info_table',
    cartRow: 'tbody tr',
    cartDescription: '.cart_description h4 a',
    cartQuantity: '.cart_quantity button.disabled',
    cartPrice: '.cart_price p',

    // Checkout
    proceedToCheckoutButton: '.btn.btn-default.check_out',
    checkoutCartTable: '.table-responsive.cart_info table',
    trTbody: 'tbody tr',
    descriptionCheckout: 'td.cart_description h4 a',
    tdQuantity: 'td.cart_quantity button.disabled',
    tdPrice: 'td.cart_price p',
    btnOrder: 'a.btn.check_out',



    //Payment Page 🥇
    idStripe: '#payment-form',
    nameOnCardInput: '[data-qa="name-on-card"]',
    // If team dev not using stripe
    cardNumberInput: '[data-qa="card-number"]',
    cvcInput: '[data-qa="cvc"]',
    expiryMonthInput: '[data-qa="expiry-month"]',
    expiryYearInput: '[data-qa="expiry-year"]',
    //--------------------- 🥇
    // If team dev using stripe 🥇
    // idStripe: '#stripe',
    inputCardNumber: 'cardNumber',
    inputDate: 'cardExpiry',
    inputCVC: 'cardCvc',
    payButton: 'button[data-qa="pay-button"]',

    // Success message
    successMessage: '[data-qa="order-placed"]',
};

export default selectorsCart;
