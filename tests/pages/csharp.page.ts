import BasePage from './base.page';

export default class CSharpPage extends BasePage {
    name: string = "c#-page";
    pathstem: string = 'csharp';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "C#" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
