import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PASTRIES } from './mock-pastries';


@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit // Interface OnInit 
{
  titlePage: string = "Page principale : Liste des pâtisseries";
  pastries: Pastrie[]|null = PASTRIES;
  mockPastries: Pastrie[] = PASTRIES;
  selectedPastry: Pastrie;
  @Input() search: string;
  constructor() { }

  ngOnInit(): void // permet d'initialiser au montage du component
  {
  }
  filter(search: string): boolean
  {
    this.pastries = [];
    // console.log(`recherche ${search}`)
    this.mockPastries?.forEach(mockPastrie => 
     {
      if(mockPastrie.name === search)
      {
        // console.log(`après si : ${mockPastrie.name}`)
        this.pastries?.push(mockPastrie);
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
  selectPastry(pastry: Pastrie): void
  {
    this.selectedPastry = pastry;

      

  }
  ngOnChanges(): void
  {
    console.log(this.search);
    if(this.search !== undefined)
    {this.filter(this.search)}
    if(this.search ==="")
    {
      this.pastries = PASTRIES;
    }
    
  }
}
