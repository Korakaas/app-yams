import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePastrieComponent } from '../pastrie/create-pastrie/create-pastrie.component';
import { PastrieDescriptionComponent } from '../pastrie/pastrie-description/pastrie-description.component';
import { LoginComponent } from '../pastrie/login-component/login-component.component';
import { DashboardComponent } from '../pastrie/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PastriesComponent } from '../pastrie/pastries/pastries.component';
import { GuardService } from '../guard.service';


const pastriesRoutes: Routes = [
  {
    path: 'pastries', 
    children: [
      {
        path: 'addPastrie', 
        component: CreatePastrieComponent
      },
      {
        path: '', 
        component: PastriesComponent
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
    component: LoginComponent,
  },
  {
    path: 'dashboard',   canActivate:[GuardService],
    component: DashboardComponent, 

  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(pastriesRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
