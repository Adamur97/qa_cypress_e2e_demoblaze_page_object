import PageObject from './PageObject';

export default class HomePage extends PageObject {
  selectProduct(productName) {
    return this.getElement('.card-title').contains(productName).click();
  }

  addToCart(productName) {
    this.selectProduct(productName);
    this.clickElement('a[onclick^=\'addToCart\']');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });
  }
}
