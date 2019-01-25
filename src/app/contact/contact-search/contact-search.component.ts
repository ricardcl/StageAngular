import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent  {


  @Output() searchEvent = new EventEmitter<string>();

  searchContact(event: Event) {
    console.log(event.target);
    this.searchEvent.emit( (<any>event.target).value);
    (<HTMLInputElement>event.target).value = ''; // on vide l'input apres quil ait ete affiche
    // == this.searchEvent.emit( (<HTMLInputElement>event.target).value);
  }
}
