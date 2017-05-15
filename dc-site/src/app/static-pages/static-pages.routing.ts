/**
 * Created by mac on 14.05.17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticPageComponent } from './static-page/static-page.component';

const routes: Routes = [
    { path: '', component: StaticPageComponent }
];

export const staticRouting: ModuleWithProviders = RouterModule.forChild(routes);