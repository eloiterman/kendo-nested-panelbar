import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import TeamComponent from './team.component';
import InfoComponent from './info.component';
import AboutComponent from './about.component';

export const InfoRoutes: Routes = [
    {
        path: 'info',
        component: InfoComponent,
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'team', component: TeamComponent }
        ]
    }
];

export const infoRouting: ModuleWithProviders<unknown> = RouterModule.forRoot(InfoRoutes);
