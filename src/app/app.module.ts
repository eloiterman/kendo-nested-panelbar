import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { panelbarRouting, appRoutingProviders } from './panelbar.routes';
import { infoRouting } from './info.routes';

import HomeComponent from './home.component';
import ProductsComponent from './products.component';
import InfoComponent from './info.component';
import AboutComponent from './about.component';
import TeamComponent from './team.component';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      ProductsComponent,
      InfoComponent,
      TeamComponent,
      AboutComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      LayoutModule,
      panelbarRouting,
      infoRouting
    ],
    providers:    [
      appRoutingProviders,
      { provide: APP_BASE_HREF, useValue: window.location.pathname }
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}

