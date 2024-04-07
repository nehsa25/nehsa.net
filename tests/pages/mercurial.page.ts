import BasePage from './base.page';

export default class MercurialPage extends BasePage {
    name: string = "mercurial-page";
    pathstem: string = 'mercurial';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Mercurial / hg" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
