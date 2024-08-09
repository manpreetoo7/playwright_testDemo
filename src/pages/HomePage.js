import {Page, expect} from "@playwright/test";

export default class HomePage {

     constructor(page){
        this.page =page;
        this.pageTitle ='[data-test="title"]';
     }

     async expectPageTobeVisible(){
        console.log();
        await expect (this.page.locator(this.pageTitle)).toHaveText("Products");
     }
}