import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home';
import { MatchTownComponent } from './match/town/town';
import { Case2Component } from './case2/case2';

const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'case2', component: Case2Component},
    { path: 'match', component: MatchTownComponent },
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);