import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page/static-page.component';

import { staticRouting } from './static-pages.routing';

@NgModule({
  imports: [
    CommonModule,
    staticRouting
  ],
  declarations: [StaticPageComponent]
})
export class StaticPagesModule { }
