import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/@models/contact';
import { Message } from 'src/app/@models/message';
import { MessageStatus } from 'src/app/services/message-status.enum';
import { ConversationService } from 'src/app/services/conversation.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  constructor(private conversationService: ConversationService) {}

  /**origine: Contact = { id: 1, name: { first: 'origine 1', last: ' Ipsum 1' } };

  recipient: Contact = {
    id: 1,
    name: { first: 'recipient 1', last: ' Ipsum 1' }
  };
  */
  origine: Contact;
  recipient: Contact;

  private _messages: Message[] = [];

  ngOnInit(): void {
    this.origine = this.conversationService.origine;
    this.recipient = this.conversationService.recipient;



    // this.conversationService.load().subscribe( data => this._messages = data);
    this.conversationService.reload.subscribe( data => {      this.refresh()
    });
  }

  refresh() {
    this.conversationService.load().subscribe(data => (this._messages = data));
  }

  addMessage(text: string) {
    /* const msg = {
      text,
      status: MessageStatus.SENT,
      userId: this.origine.id,
      origin: this.origine,
      recipient: this.recipient
    };

    this._messages.push( msg );*/
    const msg = this.conversationService.create(text);
    this.conversationService.send(msg).subscribe(data => this.refresh());
    // il faut subscriber a l'observable pour qu il soit pris en compte ) rajouter .subscribe a la fin
  }

  get messages(): Array<Message> {
    return this._messages;
  }
}
