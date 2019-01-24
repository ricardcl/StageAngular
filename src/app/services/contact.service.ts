import { Injectable } from '@angular/core';
import { Manager, Observable, OpenObject } from '../@models/manager';
import { Contact } from '../@models/contact';


@Injectable({
  providedIn: 'root'
})

export class ContactService implements Manager<Contact> {
  collection: Contact[];
  api: string;

  load(limit?: number): Observable<Contact[]> {
    throw new Error();
  }
  send(data: Contact): Observable<Contact> {
    throw new Error();
  }
  update(target: Contact, updates: OpenObject): Observable<Contact> {
    throw new Error();
  }
  search(criterias: OpenObject): Observable<Contact[]> {
    throw new Error();
  }

  constructor() { }

}
