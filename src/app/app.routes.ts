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
import { TestingComponent } from './main/testing/testing.component';
import { SecurityComponent } from './main/security/security.component';
import { LinuxComponent } from './main/linux/linux.component';
import { GoComponent } from './main/go/go.component';
import { ScratchComponent } from './main/scratch/scratch.component';
import { AiComponent } from './main/ai/ai.component';
import { NosqlComponent } from './main/nosql/nosql.component';
import { KubernetesComponent } from './main/kubernetes/kubernetes.component';
import { SeoComponent } from './main/seo/seo.component';
import { ReactComponent } from './main/react/react.component';
import { TailwindcssComponent } from './main/tailwindcss/tailwindcss.component';
import { ReduxComponent } from './main/redux/redux.component';
import { CloudComponent } from './main/cloud/cloud.component';
import { JavascriptFrameworksComponent } from './main/javascript-frameworks/javascript-frameworks.component';
import { VueComponent } from './main/vue/vue.component';
import { GraphqlComponent } from './main/graphql/graphql.component';
import { MicrosoftMonetizeNowComponent } from './main/microsoft-monetize-now/microsoft-monetize-now.component';
import { MicrosoftClarityComponent } from './main/microsoft-clarity/microsoft-clarity.component';
import { DnsComponent } from './main/dns/dns.component';
import { GameTheoryComponent } from './main/blog/game-theory/game-theory.component';
import { WhatComesAroundGoesAroundComponent } from './main/blog/what-comes-around-goes-around/what-comes-around-goes-around.component';
import { CustomElementsComponent } from './main/blog/custom-elements/custom-elements.component';
import { VscodeBadUxComponent } from './main/blog/vscode-bad-ux/vscode-bad-ux.component';
import { IUnderstandPiComponent } from './main/blog/i-understand-pi/i-understand-pi.component';
import { KestrelComponent } from './main/kestrel/kestrel.component';
import { SsrComponent } from './main/ssr/ssr.component';
import { DiscordComponent } from './main/discord/discord.component';
import { TSqlComponent } from './main/t-sql/t-sql.component';
import { FetchxmlComponent } from './main/fetchxml/fetchxml.component';
import { ChocoComponent } from './main/choco/choco.component';
import { VimComponent } from './main/vim/vim.component';
import { GimpComponent } from './main/gimp/gimp.component';
import { GamesComponent } from './main/games/games.component';
import { ValheimComponent } from './main/games/valheim/valheim.component';
import { WindowsComponent } from './main/windows/windows.component';
import { MariadbComponent } from './main/mariadb/mariadb.component';
import { EntityComponent } from './main/entity/entity.component';
import { LlamaComponent } from './main/llama/llama.component';
import { LinqComponent } from './main/linq/linq.component';
import { UseIndeedComponent } from './main/blog/use-indeed/use-indeed.component';
import { VuexComponent } from './main/vue/vuex/vuex.component';
import { SemanticUiComponent } from './main/semantic-ui/semantic-ui.component';
import { BootstrapComponent } from './main/bootstrap/bootstrap.component';

export const routes: Routes = [
  { path: 'agile', title: 'nehsa.net | Agile', component: AgileComponent },
  { path: 'ai', title: 'nehsa.net | AI', component: AiComponent },
  { path: 'blog', title: 'nehsa.net | Blog', component: BlogComponent },
  { path: 'about', title: 'nehsa.net | About', component: BioComponent },
  {
    path: 'angular',
    title: 'nehsa.net | Angular',
    component: AngularComponent,
  },
  {
    path: 'k8s',
    title: 'nehsa.net | Kubernetes',
    component: KubernetesComponent,
  },
  { path: 'chef', title: 'nehsa.net | Chef', component: ChefComponent },
  { path: 'csharp', title: 'nehsa.net | C#', component: CSharpComponent },
  { path: 'docker', title: 'nehsa.net | Docker', component: DockerComponent },
  {
    path: 'seo',
    title: 'nehsa.net | Search Engine Optimization',
    component: SeoComponent,
  },
  { path: 'pytest', title: 'nehsa.net | Pytest', component: PytestComponent },
  { path: 'nosql', title: 'nehsa.net | NoSQL', component: NosqlComponent },
  { path: 'dns', title: 'nehsa.net | DNS', component: DnsComponent },
  {
    path: 'typescript',
    title: 'nehsa.net | TypeScript',
    component: TypescriptComponent,
  },
  {
    path: 'testing',
    title: 'nehsa.net | Testing',
    component: TestingComponent,
  },
  { path: 'linux', title: 'nehsa.net | Linux', component: LinuxComponent },
  { path: 'go', title: 'nehsa.net | Golang', component: GoComponent },
  {
    path: 'clarity',
    title: 'nehsa.net | Microsoft Clarity',
    component: MicrosoftClarityComponent,
  },
  {
    path: 'graphql',
    title: 'nehsa.net | GraphQL',
    component: GraphqlComponent,
  },
  {
    path: 'monetizenow',
    title: 'nehsa.net | Microsoft Monetize',
    component: MicrosoftMonetizeNowComponent,
  },
  {
    path: 'security',
    title: 'nehsa.net | Security',
    component: SecurityComponent,
  },
  {
    path: 'school',
    title: 'nehsa.net | School',
    component: SchoolComponent,
  },
  {
    path: 'school/engr102',
    title: 'nehsa.net | engr102',
    component: Engr102Component,
  },
  {
    path: 'school/ph207',
    title: 'nehsa.net | ph207',
    component: Ph207Component,
  },
  { path: 'npm', title: 'nehsa.net | npm', component: NpmComponent },
  {
    path: 'playwright',
    title: 'nehsa.net | Playwright',
    component: PlaywrightComponent,
  },
  { path: 'doxy', title: 'nehsa.net | Doxygen', component: DoxygenComponent },
  { path: 'welcome', title: 'nehsa.net | Home', component: WelcomeComponent },
  {
    path: 'dot',
    title: 'nehsa.net | Dot / Graphwiz / Pydot',
    component: DotComponent,
  },
  { path: 'ohai', title: 'nehsa.net | Ohai', component: OhaiComponent },
  {
    path: 'powershell',
    title: 'nehsa.net | Powershell',
    component: PowershellComponent,
  },
  {
    path: 'projects',
    title: 'nehsa.net | Projects',
    component: ProjectsComponent,
  },
  {
    path: 'asyncio',
    title: 'nehsa.net | AsyncIO',
    component: AsyncioComponent,
  },
  { path: 'python', title: 'nehsa.net | Python', component: PythonComponent },
  {
    path: 'mercurial',
    title: 'nehsa.net | Mercurial',
    component: MercurialComponent,
  },
  { path: 'gcp', title: 'nehsa.net | gcp', component: GcpComponent },
  { path: 'azure', title: 'nehsa.net | Azure', component: AzureComponent },
  { path: 'aws', title: 'nehsa.net | aws', component: AwsComponent },
  {
    path: 'jenkins',
    title: 'nehsa.net | Jenkins',
    component: JenkinsComponent,
  },
  {
    path: 'discord',
    title: 'nehsa.net | Discord',
    component: DiscordComponent,
  },
  { path: 'jsdoc', title: 'nehsa.net | jsdoc', component: JsdocComponent },
  { path: 'cloud', title: 'nehsa.net | Cloud', component: CloudComponent },
  {
    path: 'tsql',
    title: 'nehsa.net | Transactional SQL',
    component: TSqlComponent,
  },
  { path: 'java', title: 'nehsa.net | Java', component: JavaComponent },
  { path: 'github', title: 'nehsa.net | Github', component: GithubComponent },
  { path: 'vue', title: 'nehsa.net | Vue.js', component: VueComponent },
  { path: 'vue/vuex', title: 'nehsa.net | Vuex', component: VuexComponent },
  {
    path: 'webdev-frameworks',
    title: 'nehsa.net | Web Development Frameworks',
    component: JavascriptFrameworksComponent,
  },
  {
    path: 'website',
    title: 'nehsa.net | This Website',
    component: ThisWebsiteComponent,
  },
  { path: 'tls', title: 'nehsa.net | TLS', component: TlsComponent },
  { path: 'semanticui', title: 'nehsa.net | Semantic UI', component: SemanticUiComponent },
  {
    path: '2024-august-29/gametheory',
    title: 'nehsa.net | Game Theory',
    component: GameTheoryComponent,
  },
  {
    path: '2024-july-28/makingofmud',
    title: 'nehsa.net | Making of NehsaMUD',
    component: MudMakingOfComponent,
  },
  {
    path: '2024-august-29/ageism',
    title: 'nehsa.net | Game Theory',
    component: WhatComesAroundGoesAroundComponent,
  },
  {
    path: '2024-oct-6/chooseindeed',
    title: 'nehsa.net | Choose Indeed',
    component: UseIndeedComponent,
  },
  {
    path: '2024-sept-1/customelements',
    title: 'nehsa.net | Custom Elements',
    component: CustomElementsComponent,
  },
  {
    path: '2024-sept-1/vscodebadux',
    title: 'nehsa.net | VSCode Bad UX',
    component: VscodeBadUxComponent,
  },
  {
    path: '2024-sept-1/i-understand-pi',
    title: 'nehsa.net | I Understand Pi',
    component: IUnderstandPiComponent,
  },
  {
    path: '2024-august-29/ageism',
    title: 'nehsa.net | Game Theory',
    component: WhatComesAroundGoesAroundComponent,
  },
  {
    path: 'grammar',
    title: 'nehsa.net | Grammar',
    component: WritingComponent,
  },
  {
    path: 'bootstrap',
    title: 'nehsa.net | Bootstrap',
    component: BootstrapComponent,
  },
  {
    path: 'gemini',
    title: 'nehsa.net | Google Gemini',
    component: GeminiComponent,
  },
  {
    path: 'design',
    title: 'nehsa.net | Design Patterns',
    component: DesignpatternsComponent,
  },
  {
    path: 'swagger',
    title: 'nehsa.net | Swagger Documentation',
    component: SwaggerComponent,
  },
  {
    path: 'glider',
    title: 'nehsa.net | Glider Preparedness',
    component: GliderComponent,
  },
  { path: 'signup', title: 'nehsa.net | Signup', component: SignupComponent },
  { path: 'sql', title: 'nehsa.net | SQL', component: SqlComponent },
  { path: 'ssr', title: 'nehsa.net | SSR', component: SsrComponent },
  { path: 'mud', title: 'nehsa.net | MUD', component: MudComponent },
  {
    path: 'aiimage',
    title: 'nehsa.net | AI Image Generation',
    component: AiImageGenerationComponent,
  },
  { path: 'inno', title: 'nehsa.net |Inno Setup', component: InnoComponent },
  { path: 'mysql', title: 'nehsa.net | mysql', component: MysqlComponent },
  {
    path: 'regex',
    title: 'nehsa.net | Regular Expressions',
    component: RegexComponent,
  },
  { path: 'react', title: 'nehsa.net | React', component: ReactComponent },
  {
    path: 'webdesign',
    title: 'nehsa.net | Web Design',
    component: WebDesignComponent,
  },
  { path: 'choco', title: 'nehsa.net | Scratch', component: ChocoComponent },
  {
    path: 'scratch',
    title: 'nehsa.net | Scratch',
    component: ScratchComponent,
  },
  {
    path: 'kestrel',
    title: 'nehsa.net | Kestrel',
    component: KestrelComponent,
  },
  {
    path: 'ide',
    title: 'nehsa.net | IDEs / Code Editors',
    component: IdeComponent,
  },
  { path: 'iis', title: 'nehsa.net | IIS', component: IisComponent },
  {
    path: 'tailwindcss',
    title: 'nehsa.net | Tailwind CSS',
    component: TailwindcssComponent,
  },
  { path: 'redux', title: 'nehsa.net | Redux', component: ReduxComponent },
  {
    path: 'dynamics365',
    title: 'nehsa.net | Dynamics 365',
    component: FetchxmlComponent,
  },
  { path: 'vim', title: 'nehsa.net | VIM', component: VimComponent },
  { path: 'gimp', title: 'nehsa.net | Gimp', component: GimpComponent },
  { path: 'games', title: 'nehsa.net | Games', component: GamesComponent },
  {
    path: 'valheim',
    title: 'nehsa.net | Valheim',
    component: ValheimComponent,
  },
  {
    path: 'mariadb',
    title: 'nehsa.net | MariaDB',
    component: MariadbComponent,
  },
  {
    path: 'entity',
    title: 'nehsa.net | Entity Framework',
    component: EntityComponent,
  },
  {
    path: 'llama',
    title: 'nehsa.net | Llama',
    component: LlamaComponent,
  },
  {
    path: 'linq',
    title: 'nehsa.net | Linq',
    component: LinqComponent,
  },
  {
    path: 'windows',
    title: 'nehsa.net | Windows',
    component: WindowsComponent,
  },
  { path: '**', component: WelcomeComponent }, // Default route if nothing else found
];
