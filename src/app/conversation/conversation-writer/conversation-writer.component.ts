import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conversation-writer',
  templateUrl: './conversation-writer.component.html',
  styleUrls: ['./conversation-writer.component.css']
})
export class ConversationWriterComponent  {

  @Output() message = new EventEmitter<string>();

  sendMessage( evt: Event ) {
    this.message.emit( (<HTMLInputElement>event.target).value);
    (<HTMLInputElement>event.target).value = '';
  }

}
