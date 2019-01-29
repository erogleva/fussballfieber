import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteNewsletterComponent } from './startseite-newsletter.component';

describe('StartseiteNewsletterComponent', () => {
  let component: StartseiteNewsletterComponent;
  let fixture: ComponentFixture<StartseiteNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartseiteNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
