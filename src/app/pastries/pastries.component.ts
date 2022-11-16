import { Component, OnInit } from '@angular/core';
import { List, Pastrie } from '../pastrie';
import { PASTRIES } from './mock-pastries';
import {INGREDIENTS_LISTS} from './mock-pastries'

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit // Interface OnInit 
{
  titlePage: string = "Page principale : Liste des pâtisseries";
  pastries: Pastrie[]|null = PASTRIES;
  list: List[] = INGREDIENTS_LISTS;

  constructor() { }

  ngOnInit(): void // permet d'initialiser au montage du component
  {
  }

}
