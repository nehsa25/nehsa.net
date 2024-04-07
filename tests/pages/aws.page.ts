import BasePage from './base.page';

export default class AWSPage extends BasePage {
    name: string = "aws-page";
    pathstem: string = 'aws';
    _title = 'Jesse Stone - nehsa.net';
    get headerTitle(): string { return "AWS" }
    get title(): string { return this._title }    
    get path(): string { return `${this.settings.APP_ENVIRONMENT}/${this.pathstem}`; };

    // locators
    get getHeaderTitle() { return this.page.getByTestId('header-title'); }

    /** Navigates to the page using elements on the page as a end user would */
    async navigateTo() { 
        throw new RangeError("N/A");
    }

    async goto() {
        console.log(`Going directly (not navigating) to: ${this.path}`);
        await this.page.goto(this.path);
    }
}
