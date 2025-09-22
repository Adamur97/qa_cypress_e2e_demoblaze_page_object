import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddToCart() {
    cy.contains('a', 'Add to cart').click();
  }

  assertAlert(message) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq(message);
    });
  }
}

export default ProductPageObject;
