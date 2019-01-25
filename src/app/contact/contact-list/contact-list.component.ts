import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/@models/contact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contactList: Contact[] =
  [
    {
      id: 1,
      name: {
        first: 'Claire',
        last: 'R',
      },
    },
    {
      id: 2,
      name: {
        first: 'Pierre',
        last: 'C',
      },
    },
    {
      id: 3,
      name: {
        first: 'Vincent',
        last: 'R',
      },
    },
    {
      id: 4,
      name: {
        first: 'Anne',
        last: 'R',
      },
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
