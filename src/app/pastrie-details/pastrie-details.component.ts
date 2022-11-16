import { Component, OnInit, Input } from '@angular/core'; //décorateur Input
import { Pastrie, List } from '../pastrie';
import { INGREDIENTS_LISTS } from '../pastries/mock-pastries';
@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {
  ingredientsList: List[] = INGREDIENTS_LISTS; //récupération de la liste des listes d'ingrédients
  ingredients:string[] = []; //liste des ingrédients pour la pastrie séclectionnée


  @Input() pastrie: Pastrie
  constructor() { }
  CLickMe(event: KeyboardEvent)
  {
    const key = event.key;
    console.log("Clicked");
  }
  ngOnInit(): void {

    console.log(this.pastrie);
  }

  ngOnChanges(): void //appeler automatiquement on n des ékément du composent ets modifié (par exemple quand il recoit un nouveau input)
  {
    if(this.pastrie)
    {
      //pastrie?.id indique que si pastrie est un indéfini ou null pas besoin d'aller chercher id
      //tableau vide si jamais indéfini comme ça on a toujours un tableau
      this.ingredients = this.ingredientsList.find(elem => elem.id === this.pastrie?.id)?.list || [];
    }
  }

}
