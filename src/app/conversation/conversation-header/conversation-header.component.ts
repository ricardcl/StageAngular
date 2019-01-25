import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/@models/contact';

@Component({
  selector: 'app-conversation-header',
  templateUrl: './conversation-header.component.html',
  styleUrls: ['./conversation-header.component.css']
})
export class ConversationHeaderComponent  {

  @Input() contact: Contact;

}
