import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("login with correct credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(process.env.userid);
  await loginPage.fillPasswaord(process.env.password);
  const homePage = await loginPage.clickLoginButton();
  await homePage.expectPageTobeVisible();
});

test("Login with wrong credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(process.env.useridWrong);
  await loginPage.fillPasswaord(process.env.password);
  await loginPage.clickLoginButton();
  await loginPage.wrongCredentialsError();
});
