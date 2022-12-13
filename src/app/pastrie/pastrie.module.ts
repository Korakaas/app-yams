import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { PastriesComponent } from './pastries/pastries.component';
import { BorderCardDirective } from './border-card.directive';
import { PastrieTagColorPipe } from './pastrie-tag-color.pipe';
import { SearchModule } from '../search/search.module';
import { Routes, RouterModule } from '@angular/router';
import { PastrieDescriptionComponent } from './pastrie-description/pastrie-description.component';
import { LoginComponent } from './login-component/login-component.component';
import { CreatePastrieComponent } from './create-pastrie/create-pastrie.component';

const pastriesRoutes: Routes = [
  {
    path: 'pastries', 
    component: PastriesComponent
  },
  {
    path:'',
    redirectTo: '/pastries',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'pastrie/:id', 
    component: PastrieDescriptionComponent
  }
];
@NgModule({
  declarations: [
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastrieTagColorPipe,
    LoginComponent,
    PastrieDescriptionComponent,
    CreatePastrieComponent

  ],
  exports:
  [
    //on appelle pastries à partie de app qui ne fait pas parti du module pastrie il faut donc créer une porte d'entrée 
    //pour pouvoir utiliser ce module et donc le app-pastries dans app.component.html
    PastriesComponent
  ],

  imports: [
    CommonModule,
    SearchModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(pastriesRoutes)  
  ]
})
export class PastrieModule { }
