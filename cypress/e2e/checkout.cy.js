/// <reference types="cypress" />
import HomePage from '../support/pages/home.pageObject';
import CheckoutPage from '../support/pages/checkout.pageObject';

describe('Demoblaze checkout flow', () => {
  const homePage = new HomePage();
  const checkoutPage = new CheckoutPage();

  it('should allow user to place an order', () => {
    homePage.visit('https://www.demoblaze.com');
    homePage.addToCart('Samsung galaxy s6');

    checkoutPage.openCart();
    checkoutPage.placeOrder();
    checkoutPage.fillOrderForm(
      'John Doe',
      'USA',
      'New York',
      '1234567890123456',
      '12',
      '2025'
    );
    checkoutPage.purchase();
  });
});
