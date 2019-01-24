import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationDisplayMessageComponent } from './conversation-display-message.component';

describe('ConversationDisplayMessageComponent', () => {
  let component: ConversationDisplayMessageComponent;
  let fixture: ComponentFixture<ConversationDisplayMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationDisplayMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationDisplayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
