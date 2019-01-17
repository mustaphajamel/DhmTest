import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ListPersonneComponent } from './list-personne/list-personne.component';
const route: Routes =  [
  {path : '' , redirectTo: 'listticker' , pathMatch : 'full' },
  {path : 'listpersonne', component: ListPersonneComponent },
  ]
@NgModule({
  declarations: [
    AppComponent,
    ListPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      route,
      { enableTracing: false } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
