import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventZeitplanComponent } from './event-zeitplan.component';

describe('EventZeitplanComponent', () => {
  let component: EventZeitplanComponent;
  let fixture: ComponentFixture<EventZeitplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventZeitplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventZeitplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
