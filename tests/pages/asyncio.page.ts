import BasePage from './base.page';

export default class AsyncIOPage extends BasePage {
    name: string = "ansyncio-page";
    pathstem: string = 'asyncio';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "AsyncIO / Websockets" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }

    /** Navigates to the page using elements on the page as a end user would */
    async navigateTo() { 
        throw new RangeError("N/A");
    }

    /** Goes directly to a page via the URL (often not possible due to how sessionization is done on License Portal) */
    async goto() {
        console.log(`Going directly (not navigating) to: ${this.path}`);
        await this.page.goto(this.path);
    }
}
