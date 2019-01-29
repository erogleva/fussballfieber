import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteStadionComponent } from './startseite-stadion.component';

describe('StartseiteStadionComponent', () => {
  let component: StartseiteStadionComponent;
  let fixture: ComponentFixture<StartseiteStadionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartseiteStadionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteStadionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
