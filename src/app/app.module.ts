import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { Menu1Component } from './menu1/menu1.component';
import { ErrorComponent } from './error/error.component';
import { MENU2Component } from './menu2/menu2.component';


const routes: Routes = [
  // El orden IMPORTA esta es la primera que quiero que se vea
  { path: '', component: Menu1Component },
  // canActive es el metodo que creamos en auth.guard.ts para prohibir la entrada a
  // los no logueados
  { path: 'menu1', component: Menu1Component },
  { path: 'menu2', component: MENU2Component },
  { path: '**', component: ErrorComponent }

];



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)

    ],
  declarations: [ 
    AppComponent, 
    Menu1Component,
    ErrorComponent,
    MENU2Component 
    
    ],
    
  bootstrap:    [ AppComponent ]
})





export class AppModule { }
