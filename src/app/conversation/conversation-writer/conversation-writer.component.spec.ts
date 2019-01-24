import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationWriterComponent } from './conversation-writer.component';

describe('ConversationWriterComponent', () => {
  let component: ConversationWriterComponent;
  let fixture: ComponentFixture<ConversationWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
