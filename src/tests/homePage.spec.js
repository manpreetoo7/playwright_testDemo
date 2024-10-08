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

test("Sorting item", async () => {
  await homePage.selectOptionFromDropdown("Name (A to Z)");
});

test("Expanding side menu", async () => {
  await homePage.clickSideMenu();
});
