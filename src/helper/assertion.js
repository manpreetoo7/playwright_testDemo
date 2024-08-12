// assertionClass.js
import { expect } from "@playwright/test";

export default class AssertionClass {
  constructor(page) {
    this.page = page;
  }

  async expectElementToBeVisible(locator, timeout = 5000) {
    await expect(this.page.locator(locator)).toBeVisible({ timeout });
  }

  async expectTextToBe(locator, expectedText) {
    await expect(this.page.locator(locator)).toContainText(expectedText);
  }

  async expectTitleToBe(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async expectURLToContain(substring) {
    await expect(this.page).toHaveURL(new RegExp(substring));
  }
}
