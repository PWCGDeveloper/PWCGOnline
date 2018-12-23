import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPilotComponent } from './newpilot.component';

describe('NewPilotComponent', () => {
  let component: NewPilotComponent;
  let fixture: ComponentFixture<NewPilotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPilotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
