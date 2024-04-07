import BasePage from './base.page';

export default class CicdPage extends BasePage {
    name: string = "cicd-page";
    pathstem: string = 'cicd';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "CI/CD" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }

}
