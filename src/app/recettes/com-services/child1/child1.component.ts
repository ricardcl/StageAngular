import { Component, OnInit, Optional, Inject } from '@angular/core';
import { TalkywalkyService } from '../talkywalky.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  display = 0;

  // si angular ne trouve pas le service,
  // on lui demande de ne pas faire d'erreur en précisant @optional devant

  constructor(
    @Optional() @Inject(TalkywalkyService) private service: TalkywalkyService
  ) {
    // this.display = service.getCode() || 1234;
  }

  ngOnInit() {}
}
