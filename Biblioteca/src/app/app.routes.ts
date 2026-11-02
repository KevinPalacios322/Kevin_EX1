import { Routes } from '@angular/router';
import { Login } from './login/login';
import {Libro} from './libro/libro';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'libro', component: Libro }
];
