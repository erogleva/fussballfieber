import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPreiseComponent } from './event-preise.component';

describe('EventPreiseComponent', () => {
  let component: EventPreiseComponent;
  let fixture: ComponentFixture<EventPreiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPreiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
