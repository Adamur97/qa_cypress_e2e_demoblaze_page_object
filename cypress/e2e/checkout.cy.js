import HomePage from '../support/pages/home.pageObject';
import ProductPage from '../support/pages/product.pageObject';
import CheckoutPage from '../support/pages/checkout.pageObject';

describe('Demoblaze checkout flow', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const checkoutPage = new CheckoutPage();

  const orderData = {
    name: 'John Doe',
    country: 'USA',
    city: 'New York',
    creditCard: '1234567890123456',
    month: '12',
    year: '2025'
  };

  beforeEach(() => {
    homePage.visit('https://www.demoblaze.com');
  });

  it('should allow user to place an order', () => {
    homePage
      .clickOnCategory('Laptops')
      .clickOnProduct('Sony vaio i7');

    productPage.clickOnAddToCart();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });

    checkoutPage
      .openCart();

    // Assert correct product is in the cart
    cy.get('tr.success td:nth-child(2)').should('contain.text', 'Sony vaio i7');

    checkoutPage
      .fillOrderForm(
        orderData.name,
        orderData.country,
        orderData.city,
        orderData.creditCard,
        orderData.month,
        orderData.year
      )
      .purchase();

    // Assert confirmation modal contains correct data
    cy.get('.sweet-alert').should('contain.text', orderData.name);
    cy.get('.sweet-alert').should('contain.text', orderData.creditCard);

    checkoutPage.closeModal();
  });
});
