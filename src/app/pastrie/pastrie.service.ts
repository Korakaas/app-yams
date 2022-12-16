import { Injectable } from '@angular/core';
import { PASTRIES, INGREDIENTS_LISTS } from './pastries/mock-pastries';
import { Pastrie, List } from './pastrie';
import { map, Observable, of, take, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// libraire utile pour le traitement de données
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root' //injecter de manière globale -> une seule instance des données, tout le temps le même tableau de données
                    //on peut le faire pour un seul composant si besoin
})
export class PastrieService {
  // convention dans l'API ajoutez votre identifant de base de données
  private baseUrl = environment.api;
  private pastriesUrl = 'pastries/'; // votre url locale pour les pâtisseries
  private apiUrl = encodeURI(this.baseUrl + this.pastriesUrl)
  private allPastries: Pastrie[];
  private PastrieIngredientsList: string[];
  private ingredientsList: List[] = INGREDIENTS_LISTS;
   searchedPastrie: Pastrie[]|null;
  private pages: number[];

  sendCurrentNumberPage = new Subject<number>();
  constructor(private http: HttpClient) { }

  getPastries():Observable<Pastrie[]>
  {
    return this.http.get<Pastrie[]>(this.apiUrl)
  }
  
  getPastrie(id:string|null): Observable<Pastrie>
  {
    return this.http.get<Pastrie>(this.apiUrl +  id)
  }

  getPastriesCount$():Observable<number>
  {
    return this.http.get<number>(this.apiUrl+"count")
  }
 
  getPastriesCount():number {
      return PASTRIES.length
    }
  getPastrieIngredientsList(pastrieId:string):Observable<string[]>
  {
    console.log(this.baseUrl+"ingredients/" +  pastrieId)
    return this.http.get<string[]>(this.baseUrl+"ingredients/" +  pastrieId)
  }
  search(pastrieName:string): Observable<Pastrie[]>
  {
    console.log('test');
    console.log(pastrieName);

    return this.http.post<Pastrie[]>(this.apiUrl, {pastrieName})
    // this.getPastries()?.forEach(pastrie => 
    //   {
        
    //    if(pastrie.name.toLowerCase().includes(pastrieName.toLowerCase()))
    //    {
    //     // console.log(pastrie);
    //     // console.log(pastrieName);
    //     this.searchedPastrie?.push(pastrie);
    //     console.log(this.searchedPastrie)
    //    }})
      // this.searchedPastrie = PASTRIES.filter((pastries) => {
      // return pastries.name.toLowerCase().includes(pastrieName.toLowerCase())})

      // console.log(this.searchedPastrie)
      //  return this.searchedPastrie!
  }

  add(pastrie: Pastrie): Observable<string>
  {
    console.log(pastrie)
    console.log(this.apiUrl + "addPastrie")
    return this.http.post<string>(this.apiUrl + "addPastrie",{pastrie}) 
  }


  // paginate(start: number, end:number ): Pastrie[]
  // {
  //   return PASTRIES.sort(
  //     (a, b) => { return a.order - b.order }
  //   ).slice(start, end);
  // }
  paginate$(start: number, end:number ):Observable<Pastrie[]>
  {
    let slicedPastries:Pastrie[] =[];
    return this.http.get<Pastrie[]>(this.apiUrl).pipe(
      map(pastriesAPI => {
        console.log(pastriesAPI)
        slicedPastries = pastriesAPI.sort(
          (a, b) => { return a.order - b.order }
        ).slice(start, end);
        console.log(slicedPastries)
        return slicedPastries
      }


    ))
  }
  currentPage(numberPage: number) {
  return this.sendCurrentNumberPage.next(numberPage);
}

}
