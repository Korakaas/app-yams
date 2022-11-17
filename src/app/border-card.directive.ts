import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) //el = intégralité de la div
   {
    this.setBorder('#f5f5f5');
   }

   @Input('appBorderCard') borderColor: string;
   //on récupère l'élèment injecté dans appBorderCard et on le nomme borderColor

   @HostListener('mouseenter') onMouseEnter()
   //décorateur qui permet d'écouter l'évènement mouseenter
   {
    this.setBorder(this.borderColor || '#009688');
   }
   @HostListener('mouseleave') onMouseLeave()
    //décorateur qui permet d'écouter l'évènement mouseleave
   {
    this.setBorder('#f5f5f5');
   }
   setBorder(color: string)
   {
    //nativeElement permet de récupérer l'élèment sans la surcouche Angular
    this.el.nativeElement.style.border = `solid 4px ${color}`
   }

   setHeight(height: number)
   {
    //nativeElement permet de récupérer l'élèment sans la surcouche Angular
    this.el.nativeElement.style.border = `solid 4px ${height}`
   }

}
