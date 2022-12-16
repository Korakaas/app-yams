import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root', //tag HTML à appeler 
  templateUrl: './app.component.html', //fichier template du composent
  styleUrls: ['./app.component.scss'] // associer le composent à une ou pls feuille de style
})
export class AppComponent implements OnInit {
  title = 'app-yams';
  search:string|null = null;
  token:string|undefined;
  
  constructor(private aS: AuthService, private router: Router)
  {

  }
  // searching(event: Event)
  // {
  //   this.search = (event.target as HTMLInputElement).value
  // }
  ngOnInit(): void {
    this.isloggedin()
  }
   
  // ngOnInit()
  // {
  //   this.isloggedin()
  // }
  ngDoCheck(): void
  {
    this.isloggedin()
  }
  logout()
  {
    console.log("test")
    this.aS.logout()
    this.router.navigate([""])
  }
  isloggedin()
  {
    this.token = this.aS.getToken()
  }
  // onSubmitForm () {

  //   // console.log(this.search)
  //   // ou
  //   // this.result = form.controls['username'].value;
  // }
}
