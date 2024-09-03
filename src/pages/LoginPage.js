import { Page, expect } from "@playwright/test";
import HomePage from "./HomePage";
import ActionClass from "../helper/actionClass";
import AssertionHelper from "../helper/assertion";

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.action = new ActionClass(page);
    this.assert = new AssertionHelper(page);
    this.usernameLocator = '[data-test="username"]';
    this.passwordLocator = '[data-test="password"]';
    this.loginButtonLocator = '[data-test="login-button"]';
    this.errormessage = '[data-test="error"]';
    this.errormessageText =
      "Epic sadface: Username and password do not match any user in this service";
  }

  async wrongCredentialsError() {
    await this.assert.expectElementToBeVisible(this.errormessage);
    await this.assert.expectTextToBe(this.errormessage, this.errormessageText);
  }

  async navigateToLoginPage() {
    await this.page.goto("/");
  }

  async fillUsername(username) {
    await this.action.fillField(this.usernameLocator, username);
  }

  async fillPasswaord(password) {
    await this.action.fillField(this.passwordLocator, password);
  }

  async clickLoginButton() {
    await this.action.clickElement(this.loginButtonLocator).catch((error) => {
      console.error("Error clicking login button ${error}");
      throw error; //rethrow error if needed
    });
    const homePage = new HomePage(this.page);
    return homePage;
  }
}
