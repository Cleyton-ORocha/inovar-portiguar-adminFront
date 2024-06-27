import { Routes } from '@angular/router';
import { environmentApp } from '../env/Environments';

export const routes: Routes = [
    { path: "home", title: environmentApp.nomeAplicacao + "- Home", loadComponent : () => import('./main/home/home.component')}
];
