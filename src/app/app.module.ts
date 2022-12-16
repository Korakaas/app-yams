import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HideButtonDirective } from './hide-button.directive';
import { PastrieModule } from './pastrie/pastrie.module';
import { SearchModule } from './search/search.module';
import { Routes, RouterModule } from '@angular/router';
import { PastrieDescriptionComponent } from './pastrie/pastrie-description/pastrie-description.component';
import { LoginComponent } from './pastrie/login-component/login-component.component';
import { CreatePastrieComponent } from './pastrie/create-pastrie/create-pastrie.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pastrie/dashboard/dashboard.component';
import { AppRoutingModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    HideButtonDirective,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PastrieModule,
    SearchModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
