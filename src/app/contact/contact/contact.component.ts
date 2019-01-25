import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from 'src/app/@models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  collection: Array<Contact> = [
    /**
    {id: 5, name: {first: 'Claire', last: 'R'}},
    {id: 6, name: {first: 'Pierre', last: 'C'}},
    {id: 7, name: {first: 'Vincent', last: 'R'}},
    {id: 8, name: {first: 'Anne', last: 'R'}},
    */
  ];

  criteria = '';
  subscription: Subscription;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.subscription = this.contactService
      .load()
      .subscribe(contacts => {
        console.log(contacts);
        (this.collection = contacts);
      } );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCollection(): Array<Contact> {
    if (!this.criteria) {
      return this.collection;
    }

    return this.collection.filter(({ name }: Contact) => {
      return (
        name.first.includes(this.criteria) || name.last.includes(this.criteria)
      );
    });
  }
  /**
  onSearchEvent(data) {
    this.criteria = data ;
    console.log(this.criteria);
  } */
}
