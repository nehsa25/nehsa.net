import { Page } from '@playwright/test';
import { TestSettings } from '../utility/test-settings';

/** This class is the base of all page and contains the header/footer elements/functions */
export default class BasePage {
    name: string = "basepage";
    constructor(public page: Page, public settings: TestSettings) {
        this.page = page;
        this.settings = settings;
    }

    // common locators

    // use website to navigate
    async navigateTo() { 
        throw new RangeError("N/A");
    }

    // go directly
    async goto() {
        await this.page.goto(this.path);
    }
}