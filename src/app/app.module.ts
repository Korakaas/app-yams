import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HideButtonDirective } from './hide-button.directive';
import { PastrieModule } from './pastrie/pastrie.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    HideButtonDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PastrieModule,
    SearchModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
