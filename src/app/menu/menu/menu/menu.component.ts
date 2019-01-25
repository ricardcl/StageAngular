import { Component } from '@angular/core';
import { Contact } from 'src/app/@models/contact';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {


  currentUser: Contact = {
    id: 1,
    name: {
      first: 'Current',
      last: 'USer'
    }
  };

  actions = [
    { type: 'CONVERSATION', icon: 'comments'},
    { type: 'PROFILE', icon: 'user'},
    { type: 'GROUP', icon: 'group'},
    { type: 'MESSAGE', icon: 'send'},
    { type: 'SETTINGS', icon: 'cog'}
  ];
}
