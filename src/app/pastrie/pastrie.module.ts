import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { PastriesComponent } from './pastries/pastries.component';
import { BorderCardDirective } from './border-card.directive';
import { PastrieTagColorPipe } from './pastrie-tag-color.pipe';
import { SearchModule } from '../search/search.module';
@NgModule({
  declarations: [
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastrieTagColorPipe,
  ],
  exports:
  [
    //on appelle pastries à partie de app qui ne fait pas parti du module pastrie il faut donc créer une porte d'entrée 
    //pour pouvoir utiliser ce module et donc le app-pastries dans app.component.html
    PastriesComponent
  ],

  imports: [
    CommonModule,
    SearchModule
  ]
})
export class PastrieModule { }
