import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/@models/contact';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

  profile: Contact = {
    id: 1,
    pseudo: 'Simple',
    name: {
      first: 'Bill',
      last: 'Bernard'
    },
    infos: {
      email: 'bill@gmail.com',
      city: 'Colorado, USA',
      phone: '06 05 75 02',
      ig: 'groulite'
    }
  };

}
