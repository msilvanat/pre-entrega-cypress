export class ShoppingCartPage {
  constructor() {
    this.showText = 'Show total price';
  };

  verifyProductName(product) {
    return cy.contains(product);
  };

  verifyPrice(product, price) {
    return cy.xpath(`//p[@name='${product}']//following-sibling::p[@name=${price}]`);
  }

  clickShowTotalPrice() {
    cy.contains(this.showText).click();
  };

  returnTotalPrice(price1, price2) {
    return cy.contains(price1 + price2);
  }
};