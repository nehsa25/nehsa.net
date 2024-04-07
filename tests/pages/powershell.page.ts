import BasePage from './base.page';

export default class PowershellPage extends BasePage {
    name: string = "powershell-page";
    pathstem: string = 'powershell';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Powershell" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
