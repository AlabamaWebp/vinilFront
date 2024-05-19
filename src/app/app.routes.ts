import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import { CatalogComponent } from './comps/catalog/catalog.component';
import { ProductComponent } from './comps/product/product.component';
import { FavoritesComponent } from './comps/favorites/favorites.component';
import { OrderComponent } from './comps/order/order.component';
import { AccountComponent } from './comps/account/account.component';
import { BasketComponent } from './comps/basket/basket.component';

export const routes: Routes = [
    {component: HomeComponent, path: 'home'},
    {component: LoginComponent, path: 'login'},
    {component: CatalogComponent, path: 'catalog'},
    {component: ProductComponent, path: 'catalog/:id'},
    {component: FavoritesComponent, path: 'favorites'},
    {component: OrderComponent, path: 'order'},
    {component: AccountComponent, path: 'account'},
    {component: BasketComponent, path: 'basket'},
    {path: '**', redirectTo: 'home'}
];
