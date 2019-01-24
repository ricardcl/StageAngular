import { Directive, HostListener, HostBinding } from '@angular/core';
import { Attribute } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  // pur css : on adoucit la propriete transforme en 0.3 secondes
  @HostBinding('style.transition') transition = 'transform .3s ease';
  // pur css : si on passe sur l'objet, on fait evoluer la propriete transform
  @HostBinding('style.transform') transform;

  // la directive peut ecouter des veent sur son hote qui lui appartient au DOM
  @HostListener('mouseenter')
  in() {
    console.log('in');
    this.transform = 'scale(1.2)';
  }

  @HostListener('mouseleave')
  out() {
    console.log('out');
    this.transform = 'scale(1)';
  }
  constructor(@Attribute('src') source) {
    console.log(source);
  }

}
