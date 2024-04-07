import BasePage from './base.page';

export default class PytestPage extends BasePage {
    name: string = "pytest-page";
    pathstem: string = 'pytest';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Pytest = Awesome" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
