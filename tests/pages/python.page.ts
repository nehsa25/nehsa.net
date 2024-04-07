import BasePage from './base.page';

export default class PythonPage extends BasePage {
    name: string = "python-page";
    pathstem: string = 'python';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Python" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
