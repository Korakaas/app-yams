import { Component, OnInit, Input } from '@angular/core'; //décorateur Input
import { Pastrie} from '../pastrie';
import { PastrieService } from '../pastrie.service';
@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {
  // ingredientsList: List[] = INGREDIENTS_LISTS; //récupération de la liste des listes d'ingrédients
  ingredients:string[] = []; //liste des ingrédients pour la pastrie séclectionnée
  sortRef: string = "asc";
  pastrieServiceInstance: PastrieService;

  @Input() pastrie: Pastrie|null  //récupérée du parent

  constructor(pastrieServiceFile: PastrieService) {
    this.pastrieServiceInstance = pastrieServiceFile;
   }
  ngOnInit(): void {

    console.log(this.pastrie);
  }
  ngOnChanges(): void //appeler automatiquement on n des élément du composent ets modifié (par exemple quand il recoit un nouveau input)
  {
    if(this.pastrie)
    {
      //pastrie?.id indique que si pastrie est un indéfini ou null pas besoin d'aller chercher id
      //tableau vide si jamais indéfini comme ça on a toujours un tableau
      // this.ingredients = this.ingredientsList.find(elem => elem.id === this.pastrie?.id)?.list || [];
      this.ingredients = this.pastrieServiceInstance.getPastrieIngredientsList(this.pastrie.id);
    }
  }
  AddIngredient(event :Event):void
  {
    const inputIngredient = (event.target as HTMLInputElement).value; //event.target cible de l'évènement (input dans ce cas) Angular ne comprend paa  event.target du coup faut rajouter HTMLInputElement pour lui dire le type de l'évènement
    this.ingredients.push(inputIngredient);
  }
  deleteIngedient(ingredientD: string): void
  {
    // const ingredientToDelete = this.ingredients.indexOf(ingredientD);
    // this.ingredients.splice(ingredientToDelete,1)
    //autre méthode possible
    const filtered = this.ingredients.filter((ingredient:string) =>
    {
      //filter permet de décider ce qu'on garde ou non dans le tableau selon une condition 
      return ingredient !== ingredientD;
    })
    // const filtered = this.ingredients.filter((ingredient:string) => ingredient !== ingredientD)

    this.ingredients = filtered;
  }
  sortIngredient():void
  {
    switch(this.sortRef)
    {
      case "asc":
        this.ingredients.sort((a, b) => a.localeCompare(b));
        this.sortRef = "des";
        break;
      case "des":
        this.ingredients.sort((a, b) => a.localeCompare(b));
        this.ingredients = this.ingredients.reverse()
        this.sortRef = "asc";
        break;
    }


    
  }
}
