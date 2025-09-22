// cypress/e2e/contactForm.cy.js
import ContactFormPage from '../support/pages/contactForm.pageObject';

describe('Demoblaze contact form', () => {
  const contactFormPage = new ContactFormPage();

  it('should send a message via contact form', () => {
    contactFormPage.visit('/');
    contactFormPage.openContactForm();
    contactFormPage.fillForm(
      'test@test.com',
      'Tester',
      'Hello, this is a test message!'
    );
    contactFormPage.submitForm();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Thanks for the message!!');
    });
  });
});
