import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },  // Redirige la raíz (/) a 'inicio'
  { path: 'inicio', component: InicioComponent },  // Define la ruta de 'inicio'
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' } // Ruta comodín que redirige cualquier ruta a 'inicio'
];

  @NgModule({
    declarations: [],
    imports: [ 
      RouterModule.forRoot( routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule { }
