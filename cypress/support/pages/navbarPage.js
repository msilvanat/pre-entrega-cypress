export class NavbarPage {

  retornUser(user) {
    return cy.get(`[id^='user_${user}']`);
  };
};