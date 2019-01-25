import { Injectable, EventEmitter } from '@angular/core';

import { Manager, OpenObject } from '../@models/manager';
import { Message } from '../@models/message';
import { Observable } from 'rxjs';
import { NetService } from './net.service';
import { Contact } from '../@models/contact';
import { MessageStatus } from './message-status.enum';


@Injectable({
  providedIn: 'root'
})
export class ConversationService implements Manager<Message> {
  collection: Message[];
  api = 'http://192.168.15.100:5050/messages';

  origine: Contact = { id: 1, name: { first: 'claire', last: ' r' } };

  recipient: Contact = {
    id: 1,
    name: { first: 'Pierre', last: ' R' }
  };

  reload = new EventEmitter();

  constructor(private net: NetService) {


    setInterval(
      () => this.load().subscribe( data => { this.reload.emit(data); } )
      , 3000
    );
  }

  create(text) {
    return  {
      text,
      status: MessageStatus.SENT,
      userId: this.origine.id,
      origin: this.origine,
      recipient: this.recipient
    };
  }

  load(limit?: number): Observable<Message[]> {
    return this.net.read(this.api);
  }

  send(data: Message): Observable<Message> {
    return this.net.create(this.api, data);
  }

  search(criterias: OpenObject): Observable<Message[]> {
    throw new Error('Method not implemented.');
  }

  update(target: Message, updates: OpenObject): Observable<Message> {
    throw new Error('Method not implemented.');
  }
}
