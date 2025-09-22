// cypress/support/pages/checkout.pageObject.js
import PageObject from './PageObject';

export default class CheckoutPage extends PageObject {
  openCart() {
    this.clickElement('#cartur');
  }

  placeOrder() {
    this.clickElement('button[data-target=\'#orderModal\']');
  }

  fillOrderForm(name, country, city, card, month, year) {
    this.typeText('#name', name);
    this.typeText('#country', country);
    this.typeText('#city', city);
    this.typeText('#card', card);
    this.typeText('#month', month);
    this.typeText('#year', year);
  }

  purchase() {
    this.clickElement('button[onclick=\'purchaseOrder()\']');
    cy.contains('Thank you for your purchase!').should('be.visible');
  }
}
