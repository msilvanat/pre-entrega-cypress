import { LoginPage } from '../support/pages/loginPage';
import { RegisterPage } from '../support/pages/registerPage';
import { NavbarPage } from '../support/pages/navbarPage';
import { HomePage } from '../support/pages/homePage';
import { ProductsPage } from '../support/pages/productsPage';
import { ShoppingCartPage } from '../support/pages/shoppingCartPage';

describe("Testing Online Shop Module", () => {
  let loginData;
  let productsData;
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const navbarPage = new NavbarPage();
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();

  before("before", () => {
    cy.fixture('loginData').then(data => {
      loginData = data;
    });
    cy.fixture('products').then(data => {
      productsData = data;
    });
  });

  it('Enter the page, login with the correct information, add two product to the shopping cart', () => {
    cy.visit('');
    registerPage.clickRegisterToggle();
    loginPage.typeUser(loginData.username);
    loginPage.typePassword(loginData.password);
    loginPage.clickLoginButton();
    navbarPage.retornUser(loginData.username).should('be.visible');
    homePage.clickOnlineShopLink();
    productsPage.clickAddButton(productsData.firstProduct.value);
    productsPage.clickCloseModal();
    productsPage.clickAddButton(productsData.secondProduct.value);
    productsPage.clickCloseModal();
    productsPage.clickGoShoppingCart();
    shoppingCartPage.verifyProductName(productsData.firstProduct.value).should('have.text', productsData.firstProduct.value);
    shoppingCartPage.verifyProductName(productsData.secondProduct.value).should('have.text', productsData.secondProduct.value);
    shoppingCartPage.verifyPrice(productsData.firstProduct.value, productsData.firstProduct.price).should('have.text', `$${productsData.firstProduct.price}`);
    shoppingCartPage.verifyPrice(productsData.secondProduct.value, productsData.secondProduct.price).should('have.text', `$${productsData.secondProduct.price}`);
    shoppingCartPage.clickShowTotalPrice();
    shoppingCartPage.verifyTotalPrice().invoke('text').should('be.equal', `${productsData.firstProduct.price + productsData.secondProduct.price}`);
  });

  afterEach('after each', () => {
    cy.wait(10000);
    loginPage.clickLogoutButton();
  });
});