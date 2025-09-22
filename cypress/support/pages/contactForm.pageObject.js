// cypress/support/pages/contactForm.pageObject.js
import PageObject from './PageObject';

export default class ContactFormPage extends PageObject {
  openContactForm() {
    this.getElement('a[data-target="#exampleModal"]').click();
  }

  fillForm(email, name, message) {
    this.getElement('#recipient-email').type(email);
    this.getElement('#recipient-name').type(name);
    this.getElement('#message-text').type(message);
  }

  submitForm() {
    this.getElement('button[onclick="send()"]').click();
  }
}
