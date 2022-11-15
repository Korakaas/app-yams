import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit // Interface OnInit 
{
  titlePage: string = "Page principale : Liste des pâtisseries";
  
  constructor() { }

  ngOnInit(): void // permet d'initialiser au montage du component
  {
  }

}
