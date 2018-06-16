import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home';
import { MatchTownComponent } from './match/town/town';

const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'match', component: MatchTownComponent },
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);