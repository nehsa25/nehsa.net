import BasePage from './base.page';

export default class AboutPage extends BasePage {
    name: string = "about-page";
    pathstem: string = 'about';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "Jesse Stone" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }

}
