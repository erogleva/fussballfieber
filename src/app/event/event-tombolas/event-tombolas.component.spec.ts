import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTombolasComponent } from './event-tombolas.component';

describe('EventTombolasComponent', () => {
  let component: EventTombolasComponent;
  let fixture: ComponentFixture<EventTombolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTombolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTombolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
