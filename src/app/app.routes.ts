import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import { CatalogComponent } from './comps/catalog/catalog.component';
import { ProductComponent } from './comps/product/product.component';

export const routes: Routes = [
    {component: HomeComponent, path: 'home'},
    {component: LoginComponent, path: 'login'},
    {component: CatalogComponent, path: 'catalog'},
    {component: ProductComponent, path: 'catalog/:id'},
    {path: '**', redirectTo: 'home'}
];
