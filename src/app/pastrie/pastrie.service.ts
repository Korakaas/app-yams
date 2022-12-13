import { Injectable } from '@angular/core';
import { PASTRIES, INGREDIENTS_LISTS } from './pastries/mock-pastries';
import { Pastrie, List } from './pastrie';

@Injectable({
  providedIn: 'root' //injecter de manière globale -> une seule instance des données, tout le temps le même tableau de données
                    //on peut le faire pour un seul composant si besoin
})
export class PastrieService {

  private allPastries: Pastrie[];
  private pastrie: Pastrie|null;
  private PastrieIngredientsList: string[];
  private ingredientsList: List[] = INGREDIENTS_LISTS;
   searchedPastrie: Pastrie[]|null;
  constructor() { }

  getPastries(): Pastrie[]
  {
    return this.allPastries = PASTRIES.sort((a,b) => {
      return b.quantity - a.quantity;
    });
  }
  
  getPastrie(id:string|null): Pastrie
  {
    this.pastrie = this.allPastries?.find( pastrie => pastrie.id === id) || null;
    return this.pastrie!;
  }

  getPastrieIngredientsList(pastrieId:string): string[]
  {
    this.PastrieIngredientsList = this.ingredientsList.find(list =>list.id === pastrieId)?.list || [];
    return this.PastrieIngredientsList;
  }
  search(pastrieName:string): Pastrie[]
  {
    console.log('test');
    console.log(pastrieName);
    // this.getPastries()?.forEach(pastrie => 
    //   {
        
    //    if(pastrie.name.toLowerCase().includes(pastrieName.toLowerCase()))
    //    {
    //     // console.log(pastrie);
    //     // console.log(pastrieName);
    //     this.searchedPastrie?.push(pastrie);
    //     console.log(this.searchedPastrie)
    //    }})
      this.searchedPastrie = this.getPastries().filter((pastries) => {
      return pastries.name.toLowerCase().includes(pastrieName.toLowerCase())})

      console.log(this.searchedPastrie)
       return this.searchedPastrie!
  }

  add(pastrieName:string): Pastrie[]
  {
    console.log('test');
    console.log(pastrieName);
    // this.getPastries()?.forEach(pastrie => 
    //   {
        
    //    if(pastrie.name.toLowerCase().includes(pastrieName.toLowerCase()))
    //    {
    //     // console.log(pastrie);
    //     // console.log(pastrieName);
    //     this.searchedPastrie?.push(pastrie);
    //     console.log(this.searchedPastrie)
    //    }})
      this.searchedPastrie = this.getPastries().filter((pastries) => {
      return pastries.name.toLowerCase().includes(pastrieName.toLowerCase())})

      console.log(this.searchedPastrie)
       return this.searchedPastrie!
  }
}
