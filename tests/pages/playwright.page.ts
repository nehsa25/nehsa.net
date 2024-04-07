import BasePage from './base.page';

export default class PlaywrightPage extends BasePage {
    name: string = "playwright-page";
    pathstem: string = 'playwright';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Playwright" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
