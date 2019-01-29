import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFirmenComponent } from './event-firmen.component';

describe('EventFirmenComponent', () => {
  let component: EventFirmenComponent;
  let fixture: ComponentFixture<EventFirmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFirmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFirmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
