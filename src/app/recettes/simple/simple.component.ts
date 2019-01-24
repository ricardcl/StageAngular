import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent{

  simpleAction(){
    alert('Basic Simple');
    this.simpleText += this.simpleText;
    this.simpleArray.push('Basic Simple') ;
  }

  simpleText = 'Basic Simple';
  simpleArray = ['Basic', 'Simple'];


  constructor() { }

  ngOnInit() {
  }

}
