import { Injectable } from '@angular/core';
import { PASTRIES, INGREDIENTS_LISTS } from './pastries/mock-pastries';
import { Pastrie, List } from './pastrie';

@Injectable({
  providedIn: 'root' //injecter de manière globale -> une seule instance des données, tout le temps le même tableau de données
                    //on peut le faire pour un seul composant si besoin
})
export class PastrieService {

  private allPastries: Pastrie[]|null;
  private pastrie: Pastrie|null;
  private PastrieIngredientsList: string[];
  private ingredientsList: List[] = INGREDIENTS_LISTS;
  constructor() { }

  getPastries(): Pastrie[]|null
  {
    return this.allPastries = PASTRIES;
  }

  getPastrie(id:string): Pastrie|null
  {
    this.pastrie = this.allPastries?.find( pastrie => pastrie.id === id) || null;
    return this.pastrie;
  }

  getPastrieIngredientsList(pastrieId:string): string[]
  {
    this.PastrieIngredientsList = this.ingredientsList.find(list =>list.id === pastrieId)?.list || [];
    return this.PastrieIngredientsList;
  }
}
