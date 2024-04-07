import BasePage from './base.page';

export default class TypeScriptPage extends BasePage {
    name: string = "typescript-page";
    pathstem: string = 'typescript';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "TypeScript" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}
