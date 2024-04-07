import BasePage from './base.page';

export default class DoxygenPage extends BasePage {
    name: string = "doxygen-page";
    pathstem: string = 'doxygen';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Doxygen" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
