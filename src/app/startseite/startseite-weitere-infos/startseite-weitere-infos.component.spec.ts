import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteWeitereInfosComponent } from './startseite-weitere-infos.component';

describe('StartseiteWeitereInfosComponent', () => {
  let component: StartseiteWeitereInfosComponent;
  let fixture: ComponentFixture<StartseiteWeitereInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartseiteWeitereInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteWeitereInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
