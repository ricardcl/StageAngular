import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilActivityComponent } from './profil-activity.component';

describe('ProfilActivityComponent', () => {
  let component: ProfilActivityComponent;
  let fixture: ComponentFixture<ProfilActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
