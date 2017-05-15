/**
 * Created by mac on 14.05.17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren: './home-page/home-page.module#HomePageModule' },
    { path: 'terms', loadChildren: './static-pages/static-pages.module#StaticPagesModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);