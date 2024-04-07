import BasePage from './base.page';

export default class NpmPage extends BasePage {
    name: string = "npm-page";
    pathstem: string = 'npm';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "NPM" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
