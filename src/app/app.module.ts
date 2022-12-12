import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HideButtonDirective } from './hide-button.directive';
import { PastrieModule } from './pastrie/pastrie.module';
import { SearchModule } from './search/search.module';
import { Routes, RouterModule } from '@angular/router';
import { PastriesComponent } from './pastrie/pastries/pastries.component';
import { LoginComponent } from './login-component/login-component.component';
import { PastrieDescriptionComponent } from './pastrie/pastrie-description/pastrie-description.component';



//définition de la constante pour les routes

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
    AppComponent,
    HideButtonDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PastrieModule,
    SearchModule, 
    RouterModule.forRoot(pastriesRoutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
