/**
 * Created by mac on 14.05.17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);