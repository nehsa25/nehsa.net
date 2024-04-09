import BasePage from './base.page';

export default class GcpPage extends BasePage {
    name: string = "gcp-page";
    pathstem: string = '#/gcp';
    private _headertitle: string = "Google Cloud Platform (gcp)";
    private _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return this._headertitle }
    get title(): string { return this._title }   
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}