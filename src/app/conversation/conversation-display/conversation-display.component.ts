import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/@models/message';

@Component({
  selector: 'app-conversation-display',
  templateUrl: './conversation-display.component.html',
  styleUrls: ['./conversation-display.component.css']
})
export class ConversationDisplayComponent {

  @Input() messageList: Message[];

}
