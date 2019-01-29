import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielVorstellungComponent } from './spiel-vorstellung.component';

describe('SpielVorstellungComponent', () => {
  let component: SpielVorstellungComponent;
  let fixture: ComponentFixture<SpielVorstellungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielVorstellungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielVorstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
