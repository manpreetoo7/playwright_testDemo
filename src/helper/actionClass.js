// actionClass.js
export default class ActionClass {
    constructor(page) {
        this.page = page;
    }

    async clickElement(locator) {
        await this.page.locator(locator).click();
    }

    async fillField(locator, text) {
        await this.page.locator(locator).fill(text);
    }

    async navigateToURL(url) {
        await this.page.goto(url);
    }

    async pressKey(locator, key) {
        await this.page.locator(locator).press(key);
    }

    async selectFromDopdown(locator, option){
        await this.page.locator(locator).selectText(option);
    }
}
