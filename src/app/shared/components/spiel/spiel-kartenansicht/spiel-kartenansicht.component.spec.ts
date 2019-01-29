import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielKartenansichtComponent } from './spiel-kartenansicht.component';

describe('SpielKartenansichtComponent', () => {
  let component: SpielKartenansichtComponent;
  let fixture: ComponentFixture<SpielKartenansichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielKartenansichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielKartenansichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
