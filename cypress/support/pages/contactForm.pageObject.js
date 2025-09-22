class ContactFormPage {
  openContactForm() {
    this.getElement('a[data-target="#exampleModal"]').click();
    return this;
  }

  fillForm(email, name, message) {
    this.getElement('#recipient-email').type(email);
    this.getElement('#recipient-name').type(name);
    this.getElement('#message-text').type(message);
    return this;
  }

  submitForm() {
    this.getElement('button[onclick="send()"]').click();
    return this;
  }

  getElement(selector) {
    return cy.get(selector);
  }
}

export default ContactFormPage;
