import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent  {

  @Input() action: {
    type: string;
    icon: string;
  };


}
