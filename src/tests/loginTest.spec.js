import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

const credentials = [
  { username: process.env.userid, password: process.env.password, expected: "success" },
  { username: process.env.useridWrong, password: process.env.password, expected: "error" },
  // Add more credentials as needed
];

test("login with correct credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(process.env.userid);
  await loginPage.fillPassword(process.env.password);
  const homePage = await loginPage.clickLoginButton();
  await homePage.expectPageTobeVisible();
});

test("Login with wrong credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(process.env.useridWrong);
  await loginPage.fillPassword(process.env.password);
  await loginPage.clickLoginButton();
  await loginPage.wrongCredentialsError();
});

test.describe("Login with different credentials", () => {
  for (const cred of credentials) {
    test(`Login with ${cred.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigateToLoginPage();
      const homePage = await loginPage.loginWithCredentials(cred.username, cred.password);
      if (cred.expected === "success") {
        await homePage.expectPageTobeVisible();
      } else {
        await loginPage.wrongCredentialsError();
      }
    });
  }
});
