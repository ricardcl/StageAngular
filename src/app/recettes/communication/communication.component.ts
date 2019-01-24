import { Component, OnInit, Input, OnChanges, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit, OnChanges {

  @Input() incomingValue = 'initial';
  @Output() outgoingEvent = new EventEmitter();

  public count = 0;
  
  increment(monEvent){
    console.log(monEvent);
    this.count ++;
    if (this.count==5){
      this.outgoingEvent.emit('Count is complete');
    }
  }

  constructor() { 
    console.log(this.incomingValue, 'Not Modified');
  }

  ngOnInit() {
    console.log(this.incomingValue, 'Modified from Outside');
  }

  ngOnChanges(changes){
    console.log(changes, 'Incoming Changes');
  }
}
