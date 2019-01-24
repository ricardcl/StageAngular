import { Component, OnInit } from '@angular/core';
import { TalkywalkyService } from '../talkywalky.service';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  display = 0;

  // le @Inject(TalkywalkyService) ,
  // pas obligatoire de l ecrire, cest rajoute automatiquement par typescript
  constructor( private service: TalkywalkyService) {
    this.display = this.service.getCode() || 1234;

  }

  updateCode() {
    console.log('update required');
    this.service.update();
    this.display = this.service.getCode();
  }

  ngOnInit() {
  }

}
