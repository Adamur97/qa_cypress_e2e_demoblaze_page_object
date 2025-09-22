class ProductPage {
  clickOnAddToCart() {
    cy.contains('a', 'Add to cart').click();
    return this;
  }
}

export default ProductPage;
