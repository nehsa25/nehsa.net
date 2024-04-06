
import { TestHelpers } from './test-helpers';
import AboutPage from '../pages/about.page';

/** Settings objects containing test settings and utility funtions*/
export class TestSettings {
    public APP_ENVIRONMENT = 'http://localhost:4200'
    public helpers: TestHelpers = new TestHelpers(this.page, this)

    /** Every License Portal page.  All pages should be in this list. */
    public PAGE_DEFINITIONS = [
        AboutPage
    ];
    defaultTimeoutSecs = 60;
    defaultTimeoutMs = this.defaultTimeoutSecs * 1000;

    constructor(public page: any) {
    }
}