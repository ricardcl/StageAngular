import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [MenuComponent, MenuHeaderComponent, MenuListComponent, MenuListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
