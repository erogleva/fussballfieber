import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorenKontaktFormularComponent } from './sponsoren-kontakt-formular.component';

describe('SponsorenKontaktFormularComponent', () => {
  let component: SponsorenKontaktFormularComponent;
  let fixture: ComponentFixture<SponsorenKontaktFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorenKontaktFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorenKontaktFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
