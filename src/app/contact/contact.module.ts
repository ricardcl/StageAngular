import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';

@NgModule({
  declarations: [ContactComponent, ContactSearchComponent, ContactListComponent, ContactListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
