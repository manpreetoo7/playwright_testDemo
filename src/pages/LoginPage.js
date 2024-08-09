import { Page } from "@playwright/test";
import HomePage from "./HomePage";


export default class LoginPage{
     usernameLocator = '[data-test="username"]';
     passwordLocator = '[data-test="password"]';
     loginButtonLocator = '[data-test="login-button"]';
    
    constructor(page){
        this.page = page;
    }

    async navigateToLoginPage (){
        await this.page.goto("/");
    }

    async fillUsername(username)
    {
        await this.page.locator(this.usernameLocator).fill(username);
    }

    async fillPasswaord(password){
        await this.page.locator(this.passwordLocator).fill(password);
    }

    async clickLoginButton(){
        await this.page.locator(this.loginButtonLocator).click().catch((error)=>{
            console.error('Error clicking login button ${error}');
            throw error; //rethrow error if needed
        });
        const homePage = new HomePage(this.page);
        return homePage;
    }
}