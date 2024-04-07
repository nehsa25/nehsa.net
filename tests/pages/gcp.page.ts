import BasePage from './base.page';

export default class GcpPage extends BasePage {
    name: string = "gcp-page";
    pathstem: string = 'gcp';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Google Cloud Platform (gcp)" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
