import BasePage from './base.page';

export default class AngularPage extends BasePage {
    name: string = "angular-page";
    pathstem: string = 'angular';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Angular" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
