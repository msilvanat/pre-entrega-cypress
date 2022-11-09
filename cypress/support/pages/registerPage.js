export class RegisterPage {
  constructor() {
    this.registerToggle = '#registertoggle';
  };

  clickRegisterToggle() {
    cy.get(this.registerToggle).dblclick();
  };
};