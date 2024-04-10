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
import { CicdComponent } from './main/cicd/cicd.component';
import { jsDocComment } from '@angular/compiler';
import { JsdocComponent } from './main/jsdoc/jsdoc.component';
import { Engr102Component } from './main/school/engr102/engr102.component';
import { Ph207Component } from './main/school/ph207/ph207.component';

export const routes: Routes = [
    { path: '', component: BioComponent },
    { path: 'about', component: BioComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'chef', component: ChefComponent },
    { path: 'csharp', component: CSharpComponent },
    { path: 'docker', component: DockerComponent },
    { path: 'pytest', component: PytestComponent },
    { path: 'typescript', component: TypescriptComponent },
    {
        path: 'school', component: SchoolComponent,
        children: [
            {
                path: 'engr102',
                component: Engr102Component,
            },
            {
                path: 'ph207',
                component: Ph207Component
            }
        ]
    },
    { path: 'npm', component: NpmComponent },
    { path: 'playwright', component: PlaywrightComponent },
    { path: 'doxygen', component: DoxygenComponent },
    { path: 'ohai', component: OhaiComponent },
    { path: 'powershell', component: PowershellComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'asyncio', component: AsyncioComponent },
    { path: 'python', component: PythonComponent },
    { path: 'git', component: GitComponent },
    { path: 'mercurial', component: MercurialComponent },
    { path: 'gcp', component: GcpComponent },
    { path: 'azure', component: AzureComponent },
    { path: 'aws', component: AwsComponent },
    { path: 'cicd', component: CicdComponent },
    { path: 'jsdoc', component: JsdocComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: BioComponent },
];
