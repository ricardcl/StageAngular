import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple/simple.component';
import { CommunicationComponent } from './communication/communication.component';
import { WrapperComponent } from './com-services/wrapper/wrapper.component';
import { Child1Component } from './com-services/child1/child1.component';
import { Child2Component } from './com-services/child2/child2.component';
import { AdressePipe } from './adresse.pipe';
import { ZoomDirective } from './zoom.directive';

@NgModule({
  declarations: [SimpleComponent, CommunicationComponent, WrapperComponent, Child1Component, Child2Component, AdressePipe, ZoomDirective],
  imports: [
    CommonModule
  ],
  exports: [SimpleComponent, CommunicationComponent, WrapperComponent]
})
export class RecettesModule { }
