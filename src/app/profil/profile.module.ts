import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileActivityComponent } from './profile-activity/profile-activity.component';

@NgModule({
  declarations: [ProfileComponent, ProfileActivityComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
