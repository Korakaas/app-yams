import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HideButtonDirective } from './hide-button.directive';
import { PastrieModule } from './pastrie/pastrie.module';
import { SearchModule } from './search/search.module';
import { Routes, RouterModule } from '@angular/router';
import { PastriesComponent } from './pastrie/pastries/pastries.component';
import { PastrieDescriptionComponent } from './pastrie/pastrie-description/pastrie-description.component';
import { LoginComponent } from './pastrie/login-component/login-component.component';
import { CreatePastrieComponent } from './pastrie/create-pastrie/create-pastrie.component';
import { PaginateComponent } from './pastrie/paginate/paginate.component';
import { HttpClientModule } from '@angular/common/http';



//définition de la constante pour les routes

const pastriesRoutes: Routes = [
  {
    path: 'pastries', 
    children: [
      {
        path: 'addPastrie', 
        component: CreatePastrieComponent
      },
      {
        path: ':id', // à mettre en dernier dans la liste des children
        component: PastrieDescriptionComponent
      }
    ]
  },
  {
    path:'',
    redirectTo: '/pastries',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HideButtonDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PastrieModule,
    SearchModule,
    HttpClientModule, 
    RouterModule.forRoot(pastriesRoutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
