import { Component} from '@angular/core';


@Component({
  selector: 'app-root', //tag HTML à appeler 
  templateUrl: './app.component.html', //fichier template du composent
  styleUrls: ['./app.component.scss'] // associer le composent à une ou pls feuille de style
})
export class AppComponent {
  title = 'app-yams';
  search:string|null = null;
  
  searching(event: Event)
  {
    this.search = (event.target as HTMLInputElement).value
  }
  // onSubmitForm () {

  //   // console.log(this.search)
  //   // ou
  //   // this.result = form.controls['username'].value;
  // }
}
