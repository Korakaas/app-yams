import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHideButton]'
})
export class HideButtonDirective {

  constructor(private el: ElementRef) { 
    this.setvisivility('visible');
  }

  @Input('appHideButton') visibility: string;
  @HostListener('click') onClick()
   {
    console.log(this.visibility);
    this.setvisivility(this.visibility);
   }
   setvisivility(visibility: string)
   {
    //nativeElement permet de récupérer l'élèment sans la surcouche Angular
    console.log(visibility);
    this.el.nativeElement.className = `${visibility}`
   }

}

