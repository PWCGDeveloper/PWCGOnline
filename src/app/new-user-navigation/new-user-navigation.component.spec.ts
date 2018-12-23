import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserNavigationComponent } from './new-user-navigation.component';

describe('NewUserNavigationComponent', () => {
  let component: NewUserNavigationComponent;
  let fixture: ComponentFixture<NewUserNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
