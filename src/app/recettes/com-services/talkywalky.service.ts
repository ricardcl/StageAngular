import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkywalkyService {

  private code = Math.random();
  // En javascript les primitives sont transmises par valeur
  // et tout le reste est transmis par reference
  // rmq : par defaut les services quand ils sont injectes le sont
  // par singleton -> on retrouve la meme valeur aleatoire
  // dans child1 et child2
  constructor() { }

  update() {
    this.code = Math.random();
  }

  getCode() {
    return this.code;
  }
}
