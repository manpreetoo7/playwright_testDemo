import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test",async ({page}) =>{

    const loginPage = new LoginPage(page);
    
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("standard_user");
    await loginPage.fillPasswaord("secret_sauce");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectPageTobeVisible();

});