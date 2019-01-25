import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/@models/contact';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent  {

  @Input() user: Contact;

}
