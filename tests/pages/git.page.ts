import BasePage from './base.page';

export default class GitPage extends BasePage {
    name: string = "git-page";
    pathstem: string = 'git';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "git" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
