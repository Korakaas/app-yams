import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';   

@Injectable({
    providedIn: 'root'
})
export class GuardService implements CanActivate {
    constructor(private aS: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any | boolean {
          const token = this.aS.getToken();
          console.log(state);
          console.log(token);
        if(token =="" || token == null)
        {
          // this.router.navigate([''])
          return false;

        }
        else{
          // this.router.navigate(["login"])
          return true
        }

    }
}
