import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBandsComponent } from './event-bands.component';

describe('EventBandsComponent', () => {
  let component: EventBandsComponent;
  let fixture: ComponentFixture<EventBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
