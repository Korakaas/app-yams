import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';


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
  pastrieServiceInstance: PastrieService;
  @Input() search: string|null;

  //injection de dépendance
  constructor(private pastrieServiceFile: PastrieService) {
    this.pastrieServiceInstance = pastrieServiceFile;
   }
  getPastries()
  {
    this.pastries = this.pastrieServiceInstance.getPastries()
  }

  getPastrie(id:string)
  {
    this.selectedPastry = this.pastrieServiceInstance.getPastrie(id);
  }
  ngOnInit(): void // permet d'initialiser au montage du component
  {
    this.getPastries(); //on récupère le tableau des pâtisseries à chaque fois que le composant html se créer
  }
  filter(search: string): boolean
  {
    this.pastries = [];
    // console.log(`recherche ${search}`)
    this.pastrieServiceInstance.getPastries()?.forEach(PASTRIE => 
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
    console.log(this.search);
    if(this.search !== null)
    {this.filter(this.search)}
    if(this.search ==="")
    {
      this.pastries = this.pastrieServiceInstance.getPastries();
    } 
  }
}
