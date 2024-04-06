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

export const routes: Routes = [
    { path: '', component: BioComponent },
    { path: 'about', component: BioComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'chef', component: ChefComponent },
    { path: 'csharp', component: CSharpComponent },
    { path: 'docker', component: DockerComponent },
    { path: 'pytest', component: PytestComponent },
    { path: 'typescript', component: TypescriptComponent },
    { path: 'school', component: SchoolComponent },
    { path: 'npm', component: NpmComponent },
    { path: 'playwright', component: PlaywrightComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: BioComponent },
];
