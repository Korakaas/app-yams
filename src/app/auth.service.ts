import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './pastrie/dashboard/dashboard.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.api + 'login';
  private token:string|undefined;
  constructor(private http:HttpClient) { }
  // méthode d'authentification
  auth(email: string, password: string): Observable<User>
   {
    this.token="UnToken!"
    return this.http.post<User>(this.baseUrl, {email, password} )
  }
  logout()
  {
    this.token = undefined;
    // console.log(this.token)
  }
  getToken()
  {
    return this.token;
  }
}
