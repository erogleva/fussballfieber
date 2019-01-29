import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFunparkComponent } from './event-funpark.component';

describe('EventFunparkComponent', () => {
  let component: EventFunparkComponent;
  let fixture: ComponentFixture<EventFunparkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFunparkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFunparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
