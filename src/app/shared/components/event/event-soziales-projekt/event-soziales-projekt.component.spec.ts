import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSozialesProjektComponent } from './event-soziales-projekt.component';

describe('EventSozialesProjektComponent', () => {
  let component: EventSozialesProjektComponent;
  let fixture: ComponentFixture<EventSozialesProjektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSozialesProjektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSozialesProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
