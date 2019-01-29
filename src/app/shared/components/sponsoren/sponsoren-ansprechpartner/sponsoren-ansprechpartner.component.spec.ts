import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorenAnsprechpartnerComponent } from './sponsoren-ansprechpartner.component';

describe('SponsorenAnsprechpartnerComponent', () => {
  let component: SponsorenAnsprechpartnerComponent;
  let fixture: ComponentFixture<SponsorenAnsprechpartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorenAnsprechpartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorenAnsprechpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
