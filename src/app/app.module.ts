import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonneComponent } from './personne/personne.component';

const route: Routes =  [
  {path : '' , redirectTo: 'listticker' , pathMatch : 'full' },
  {path : 'listpersonne', component: ListPersonneComponent }, ];
@NgModule({
  declarations: [
    AppComponent,
    ListPersonneComponent,
    PersonneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FormsModule ,
     ReactiveFormsModule,
    RouterModule.forRoot(
      route,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
