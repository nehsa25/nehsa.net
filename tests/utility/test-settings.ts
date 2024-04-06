
import { TestHelpers } from './test-helpers';
import AboutPage from '../pages/about.page';
import AngularPage from '../pages/angular.page';
import AsyncIOPage from '../pages/asyncio.page';
import ChefPage from '../pages/chef.page';
import CSharpPage from '../pages/csharp.page';
import DockerPage from '../pages/docker.page';
import DoxygenPage from '../pages/doxygen.page';
import GitPage from '../pages/git.page';
import MercurialPage from '../pages/mercurial.page';
import NpmPage from '../pages/npm.page';
import OhaiPage from '../pages/ohai.page';
import PlaywrightPage from '../pages/playwright.page';
import PowershellPage from '../pages/powershell.page';
import ProjectsPage from '../pages/projects.page';
import PytestPage from '../pages/pytest.page';
import PythonPage from '../pages/python.page';
import SchoolPage from '../pages/school.page';
import TypeScriptPage from '../pages/typescript.page';

/** Settings objects containing test settings and utility funtions*/
export class TestSettings {
    public APP_ENVIRONMENT = 'http://localhost:4200'
    public helpers: TestHelpers = new TestHelpers(this.page, this)

    /** Every License Portal page.  All pages should be in this list. */
    public PAGE_DEFINITIONS = [
        AboutPage,
        AngularPage,
        AsyncIOPage,
        ChefPage,
        CSharpPage,
        DockerPage,
        DoxygenPage,
        GitPage,
        MercurialPage,
        NpmPage,
        OhaiPage,
        PlaywrightPage,
        PowershellPage,
        ProjectsPage,
        PytestPage,
        PythonPage,
        SchoolPage,
        TypeScriptPage        
    ];
    defaultTimeoutSecs = 60;
    defaultTimeoutMs = this.defaultTimeoutSecs * 1000;

    constructor(public page: any) {
    }
}