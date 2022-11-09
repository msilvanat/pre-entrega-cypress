export class LoginPage {
    constructor() {
        this.userInput = '//input[@id="user"]';
        this.passwordInput = "#pass";
        this.loginButton = "#submitForm";
        this.logoutButton = '#logout';
    }

    typeUser(user) {
        cy.xpath(this.userInput).type(user);
    };

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
    };

    clickLoginButton() {
        cy.get(this.loginButton).click();
    };

    clickLogoutButton() {
        cy.get(this.logoutButton).click();
    }
};