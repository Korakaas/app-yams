import { Component, OnInit } from '@angular/core';
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
  selectedPastry: Pastrie;
  constructor() { }

  ngOnInit(): void // permet d'initialiser au montage du component
  {
  }

  selectPastry(pastry: Pastrie)
  {
    this.selectedPastry = pastry;

      

  }

}
