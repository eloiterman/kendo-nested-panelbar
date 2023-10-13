import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import HomeComponent from './home.component';
import ProductsComponent from './products.component';

export const PanelbarRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent }
];

export const appRoutingProviders: [] = [];

export const panelbarRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(PanelbarRoutes);

