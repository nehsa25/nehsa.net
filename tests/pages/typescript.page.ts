import BasePage from './base.page';

export default class TypeScriptPage extends BasePage {
    name: string = "typescript-page";
    pathstem: string = '#/typescript';
    private _headertitle: string = "TypeScript";
    private _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return this._headertitle }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }
}