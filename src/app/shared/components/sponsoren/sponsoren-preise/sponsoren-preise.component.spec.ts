import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorenPreiseComponent } from './sponsoren-preise.component';

describe('SponsorenPreiseComponent', () => {
  let component: SponsorenPreiseComponent;
  let fixture: ComponentFixture<SponsorenPreiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorenPreiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorenPreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
