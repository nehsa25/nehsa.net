import BasePage from './base.page';

export default class SchoolPage extends BasePage {
    name: string = "school-page";
    pathstem: string = 'school';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "School" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
