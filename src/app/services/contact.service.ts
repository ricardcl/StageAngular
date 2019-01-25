import { Injectable } from '@angular/core';
import { NetService } from './net.service';
import { Manager, OpenObject } from '../@models/manager';
import { Contact } from '../@models/contact';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService implements Manager<Contact> {
  collection: Contact[];
  api = 'http://localhost:5050/users';

  constructor(private netService: NetService) {}

  load(limit?: number): Observable<Contact[]> {
    return this.netService.read(this.api)
      .pipe(
        tap(data => {
          // tap : voit ce qui passe mais ne le transforme pas
          this.collection = data; // On met a jour la collection
        })
      )
      // map : a la place des donnee json de l api renvoie une collection
      .pipe(map(data => this.collection)); // puis on renvoie la collection
  }

  send(data: Contact): Observable<Contact> {
    throw new Error('Method not implemented.');
  }

  search(criterias: OpenObject): Observable<Contact[]> {
    throw new Error('Method not implemented.');
  }

  update(target: Contact, updates: OpenObject): Observable<Contact> {
    throw new Error('Method not implemented.');
  }
}
