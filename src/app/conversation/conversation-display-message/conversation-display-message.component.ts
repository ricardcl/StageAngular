import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/@models/message';

@Component({
  selector: 'app-conversation-display-message',
  templateUrl: './conversation-display-message.component.html',
  styleUrls: ['./conversation-display-message.component.css']
})
export class ConversationDisplayMessageComponent {

  @Input() message: Message;

}
