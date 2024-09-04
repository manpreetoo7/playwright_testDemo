import { test } from "@playwright/test";
import HomePage from "../pages/HomePage";

let page;
let homePage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  homePage = new HomePage(page);
});

test.beforeEach(async () => {
  await homePage.loginWithValidCredentials();
});

test("adding items in cart", async () => {
  await homePage.addItemInPackback();
  await homePage.navigateToTheCart();
});

test.afterAll(async () => {
  await page.close();
});
