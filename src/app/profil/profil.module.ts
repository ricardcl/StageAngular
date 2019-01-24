import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { ProfilActivityComponent } from './profil-activity/profil-activity.component';

@NgModule({
  declarations: [ProfilComponent, ProfilActivityComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfilComponent]
})
export class ProfilModule { }
