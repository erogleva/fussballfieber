import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteAusrichterComponent } from './startseite-ausrichter.component';

describe('StartseiteAusrichterComponent', () => {
  let component: StartseiteAusrichterComponent;
  let fixture: ComponentFixture<StartseiteAusrichterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartseiteAusrichterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteAusrichterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
