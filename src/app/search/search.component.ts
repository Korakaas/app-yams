import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PastrieService } from '../pastrie/pastrie.service';
import { Pastrie } from '../pastrie/pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchResult: EventEmitter<any> = new EventEmitter();
  //injection de dépendance
  constructor( private pS: PastrieService) { 
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    this.pS.search(form.value['word'])?.subscribe(pastries => ( this.searchResult.emit(pastries)))
    
    //on récupère les données du formulaire
    console.log(form)
    console.log(form.value['word']); // la valeur du champ word
  }
}
