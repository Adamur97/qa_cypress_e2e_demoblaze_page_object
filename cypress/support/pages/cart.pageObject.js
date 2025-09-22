import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  clickOnCartLink() {
    cy.contains('a', 'Cart').click();
  }

  assertProductInCart(productName) {
    cy.get('tr').contains(productName).should('exist');
  }

  clickOnPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }
}

export default CartPageObject;
