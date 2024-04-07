import BasePage from './base.page';

export default class AzurePage extends BasePage {
    name: string = "azure-page";
    pathstem: string = 'azure';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Azure" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }

    /** Navigates to the page using elements on the page as a end user would */
    async navigateTo() { 
        throw new RangeError("N/A");
    }

    async goto() {
        await this.page.goto(this.path);
    }
}
