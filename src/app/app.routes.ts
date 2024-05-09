import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import { CatalogComponent } from './comps/catalog/catalog.component';

export const routes: Routes = [
    {component: HomeComponent, path: 'home'},
    {component: LoginComponent, path: 'login'},
    {component: CatalogComponent, path: 'catalog'},
    {path: '**', redirectTo: 'home'}
];
