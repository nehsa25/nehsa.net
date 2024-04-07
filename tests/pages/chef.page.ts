import BasePage from './base.page';

export default class ChefPage extends BasePage {
    name: string = "chef-page";
    pathstem: string = 'chef';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Chef" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
