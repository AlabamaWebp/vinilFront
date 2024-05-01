import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';

export const routes: Routes = [
    {component: HomeComponent, path: 'home'},
    {path: '**', redirectTo: 'home'}
];
