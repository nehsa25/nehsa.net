import BasePage from './base.page';

export default class OhaiPage extends BasePage {
    name: string = "ohai-page";
    pathstem: string = 'ohai';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "OHAI" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
