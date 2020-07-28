import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { StadisticComponent } from './components/stadistic/stadistic.component';
import { PlayerComponent } from './components/player/player.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'stadistic', component: StadisticComponent },
    { path: 'player', component: PlayerComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);