import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorenListeComponent } from './sponsoren-liste.component';

describe('SponsorenListeComponent', () => {
  let component: SponsorenListeComponent;
  let fixture: ComponentFixture<SponsorenListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorenListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
