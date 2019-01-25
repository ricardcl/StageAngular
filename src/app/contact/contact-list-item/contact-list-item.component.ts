import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/@models/contact';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact = {
    id: 1,
    name: {
      first: 'Claire',
      last: 'R',
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
