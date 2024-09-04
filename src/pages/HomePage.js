import LoginPage from "./LoginPage";
import ActionClass from "../helper/actionClass";
import AssertionHelper from "../helper/assertion";

export default class HomePage {
  constructor(page) {
    this.login = new LoginPage(page);
    this.page = page;
    this.pageTitle = '[data-test="title"]';
    this.action = new ActionClass(page);
    this.assert = new AssertionHelper(page);
    this.saueLabsBagpag = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.sauceLabTshirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
    this.cart = '[data-test="shopping-cart-link"]';
    this.currentSort = '[data-test="active-option"]';
    this.dropdown = '[data-test="active-option"]';
    this.sidemenu = '[id="react-burger-menu-btn"]';
    this.sideMenuCross = '[id="react-burger-cross-btn"]';
  }

  async expectPageTobeVisible() {
    console.log();
    await this.assert.expectTextToBe(this.pageTitle, "Products");
  }

  async addItemInPackback() {
    await this.action.clickElement(this.sauceLabTshirt);
    await this.action.clickElement(this.saueLabsBagpag);
    await this.assert.expectElementToBeVisible(this.cart);
    await this.assert.expectTextToBe(this.cart, "2");
  }

  async navigateToTheCart() {
    await this.action.clickElement(this.cart);
  }

  async loginWithValidCredentials() {
    const homePage = new HomePage(this.page);
    await this.login.navigateToLoginPage();
    await this.login.fillUsername(process.env.userid);
    await this.login.fillPasswaord(process.env.password);
    await this.login.clickLoginButton();
    await homePage.expectPageTobeVisible();
  }

  async selectOptionFromDropdown(option) {
    await this.action.selectFromDopdown(this.dropdown, option);
    await this.assert.expectTextToBe(this.currentSort, option);
  }
  async clickSideMenu() {
    await this.action.clickElement(this.sidemenu);
    await this.assert.expectElementToBeVisible(this.sideMenuCross);
  }
}
