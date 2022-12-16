import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {
   msgError: string;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    // console.log(form)
    // console.log(form.value['email']);
    // console.log(form.value['password']);
    this.authService.auth(form.value['email'], form.value['password'] ).subscribe(
      {
        next:  (user) => {
          // console.log(user);
        // localStorage.setItem("user", JSON.stringify(user.email))
        this.router.navigate(["dashboard"])
      },
        error: (e) => {
          console.log(e.error)
          this.msgError = e.error;
        },

        complete: () => {}
      }
      ) // la valeur du champ email
    
  }

}


