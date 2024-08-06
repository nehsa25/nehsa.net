import { Routes } from '@angular/router';
import { BioComponent } from './main/bio/bio.component';
import { AngularComponent } from './main/angular/angular.component';
import { CSharpComponent } from './main/c-sharp/c-sharp.component';
import { DockerComponent } from './main/docker/docker.component';
import { PytestComponent } from './main/pytest/pytest.component';
import { TypescriptComponent } from './main/typescript/typescript.component';
import { SchoolComponent } from './main/school/school.component';
import { ChefComponent } from './main/chef/chef.component';
import { NpmComponent } from './main/npm/npm.component';
import { PlaywrightComponent } from './main/playwright/playwright.component';
import { DoxygenComponent } from './main/doxygen/doxygen.component';
import { OhaiComponent } from './main/ohai/ohai.component';
import { PowershellComponent } from './main/powershell/powershell.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { AsyncioComponent } from './main/asyncio/asyncio.component';
import { PythonComponent } from './main/python/python.component';
import { GitComponent } from './main/git/git.component';
import { MercurialComponent } from './main/mercurial/mercurial.component';
import { GcpComponent } from './main/gcp/gcp.component';
import { AzureComponent } from './main/azure/azure.component';
import { AwsComponent } from './main/aws/aws.component';
import { JsdocComponent } from './main/jsdoc/jsdoc.component';
import { Engr102Component } from './main/school/engr102/engr102.component';
import { Ph207Component } from './main/school/ph207/ph207.component';
import { JenkinsComponent } from './main/jenkins/jenkins.component';
import { GithubComponent } from './main/github/github.component';
import { TlsComponent } from './main/tls/tls.component';
import { WritingComponent } from './main/school/writing/writing.component';
import { AgileComponent } from './main/agile/agile.component';
import { ThisWebsiteComponent } from './main/this-website/this-website.component';
import { SwaggerComponent } from './main/swagger/swagger.component';
import { DesignpatternsComponent } from './main/designpatterns/designpatterns.component';
import { SignupComponent } from './main/signup/signup.component';
import { GliderComponent } from './main/glider/glider.component';
import { JavaComponent } from './main/java/java.component';
import { SqlComponent } from './main/sql/sql.component';
import { MudComponent } from './main/mud/mud.component';
import { DotComponent } from './main/dot/dot.component';
import { AiImageGenerationComponent } from './main/ai-image-generation/ai-image-generation.component';
import { MysqlComponent } from './main/mysql/mysql.component';
import { InnoComponent } from './main/inno/inno.component';
import { WebDesignComponent } from './main/web-design/web-design.component';
import { IisComponent } from './main/iis/iis.component';
import { GeminiComponent } from './main/gemini/gemini.component';
import { RegexComponent } from './main/regex/regex.component';
import { IdeComponent } from './main/ide/ide.component';
import { BlogComponent } from './main/blog/blog.component';
import { MudMakingOfComponent } from './main/mud-making-of/mud-making-of.component';
import { WelcomeComponent } from './main/welcome/welcome.component';

export const routes: Routes = [
    { path: '', title: 'nehsa.net | Home', component: WelcomeComponent },
    { path: 'agile', title: 'nehsa.net | Agile', component: AgileComponent },
    { path: 'blog', title: 'nehsa.net | Blog', component: BlogComponent },
    { path: 'about', title: 'nehsa.net | About', component: BioComponent },
    { path: 'angular', title: 'nehsa.net | Angular', component: AngularComponent },
    { path: 'chef', title: 'nehsa.net | Chef', component: ChefComponent },
    { path: 'csharp', title: 'nehsa.net | C#', component: CSharpComponent },
    { path: 'docker', title: 'nehsa.net | Docker', component: DockerComponent },
    { path: 'pytest', title: 'nehsa.net | Pytest', component: PytestComponent },
    { path: 'typescript', title: 'nehsa.net | TypeScript', component: TypescriptComponent },
    {
        path: 'school', title: 'nehsa.net | School', component: SchoolComponent,
    },
    {
        path: 'school/engr102', title: 'nehsa.net | engr102',
        component: Engr102Component,
    },
    {
        path: 'school/ph207', title: 'nehsa.net | ph207',
        component: Ph207Component
    },
    { path: 'makingofmud', title: 'nehsa.net | Making of NehsaMUD', component: MudMakingOfComponent },
    { path: 'npm', title: 'nehsa.net | npm', component: NpmComponent },
    { path: 'playwright', title: 'nehsa.net | Playwright', component: PlaywrightComponent },
    { path: 'doxy', title: 'nehsa.net | Doxygen', component: DoxygenComponent },
    { path: 'welcome', title: 'nehsa.net | Home', component: WelcomeComponent },
    { path: 'dot', title: 'nehsa.net | Dot / Graphwiz / Pydot', component: DotComponent },
    { path: 'ohai', title: 'nehsa.net | Ohai', component: OhaiComponent },
    { path: 'powershell', title: 'nehsa.net | Powershell', component: PowershellComponent },
    { path: 'projects', title: 'nehsa.net | Projects', component: ProjectsComponent },
    { path: 'asyncio', title: 'nehsa.net | AsyncIO', component: AsyncioComponent },
    { path: 'python', title: 'nehsa.net | Python', component: PythonComponent },
    { path: 'git', title: 'nehsa.net | git', component: GitComponent },
    { path: 'mercurial', title: 'nehsa.net | Mercurial', component: MercurialComponent },
    { path: 'gcp', title: 'nehsa.net | gcp', component: GcpComponent },
    { path: 'azure', title: 'nehsa.net | Azure', component: AzureComponent },
    { path: 'aws', title: 'nehsa.net | aws', component: AwsComponent },
    { path: 'jenkins', title: 'nehsa.net | Jenkins', component: JenkinsComponent },
    { path: 'jsdoc', title: 'nehsa.net | jsdoc', component: JsdocComponent },
    { path: 'java', title: 'nehsa.net | Java', component: JavaComponent },
    { path: 'github', title: 'nehsa.net | Github', component: GithubComponent },
    { path: 'website', title: 'nehsa.net | This Website', component: ThisWebsiteComponent },
    { path: 'tls', title: 'nehsa.net | TLS', component: TlsComponent },
    { path: 'grammar', title: 'nehsa.net | Grammar', component: WritingComponent },
    { path: 'gemini', title: 'nehsa.net | Google Gemini', component: GeminiComponent },
    { path: 'design', title: 'nehsa.net | Design Patterns', component: DesignpatternsComponent },
    { path: 'swagger', title: 'nehsa.net | Swagger Documentation', component: SwaggerComponent },
    { path: 'glider', title: 'nehsa.net | Glider Preparedness', component: GliderComponent },
    { path: 'signup', title: 'nehsa.net | Signup', component: SignupComponent },
    { path: 'sql', title: 'nehsa.net | SQL', component: SqlComponent },
    { path: 'mud', title: 'nehsa.net | MUD', component: MudComponent },
    { path: 'aiimage', title: 'nehsa.net | AI Image Generation', component: AiImageGenerationComponent },
    { path: 'inno', title: 'nehsa.net |Inno Setup', component: InnoComponent },
    { path: 'mysql', title: 'nehsa.net | mysql', component: MysqlComponent },
    { path: 'regex', title: 'nehsa.net | Regular Expressions', component: RegexComponent },
    { path: 'webdesign', title: 'nehsa.net | Web Design', component: WebDesignComponent },
    { path: 'ide', title: 'nehsa.net | IDEs / Code Editors', component: IdeComponent },
    { path: 'iis', title: 'nehsa.net | IIS', component: IisComponent },
    { path: '', title: 'nehsa.net | Home', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: WelcomeComponent },
];
