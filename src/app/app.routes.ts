import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { RegistrationComponent } from './comps/registration/registration.component';
import { LoginComponent } from './comps/login/login.component';

export const routes: Routes = [
    {component: HomeComponent, path: 'home'},
    {component: RegistrationComponent, path: 'signin'},
    {component: LoginComponent, path: 'login'},
    {path: '**', redirectTo: 'home'}
];
