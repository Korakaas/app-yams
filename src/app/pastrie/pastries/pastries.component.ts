import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';
import { PASTRIES } from './mock-pastries';



@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit // Interface OnInit 
{
  titlePage: string = "Page principale : Liste des pâtisseries";
  pastries: Pastrie[]|null;
  selectedPastry: Pastrie|null;
  @Input() search: string|null;

  //injection de dépendance
  constructor(private pS: PastrieService) {
   }
  getPastries()
  {
    this.pS.getPastries().subscribe(pastries => (this.pastries = pastries))
  }
  filterPastries(event: Pastrie[])
  {
    // this.pastries = [];
    this.pastries = event;
  }

  pagination(event: Pastrie[])
  {
    this.pastries = event;
  }

  getPastrie(id:string)
  {
    this.pS.getPastrie(id).subscribe(pastrie => (this.selectedPastry = pastrie))
  }
  ngOnInit(): void // permet d'initialiser au montage du component
  {
     this.pS.paginate$(0,3).subscribe(pastries => this.pastries = pastries);
    // this.pastries = this.pS.paginate(0, 3);
    // this.getPastries(); //on récupère le tableau des pâtisseries à chaque fois que le composant html se créer
  }
  filter(search: string): boolean
  {
    this.pastries = [];
    // console.log(`recherche ${search}`)
    PASTRIES.forEach(PASTRIE => 
     {
      if(PASTRIE.name.toLowerCase().includes(search.toLowerCase()))
      {
        // console.log(`après si : ${mockPastrie.name}`)
        this.pastries?.push(PASTRIE);
        console.log(this.pastries)
      }})
       console.log(this.pastries)
    if(this.pastries)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  // selectPastry(pastry: Pastrie): void
  // {
  //   this.selectedPastry = pastry;
  // }
  ngOnChanges(): void
  {
    // this.pastries = [];
    // console.log(this.search);
    // if(this.search !== null)
    // {this.filter(this.search)}
    // if(this.search ==="")
    // {
    //   this.pastries = this.pS.getPastries();
    // } 
  }

// Mise à jour de la pagination
paginate($event: any) {
   this.pS.paginate$($event.start, $event.end).subscribe(pastries => {this.pastries = pastries});
}
}
