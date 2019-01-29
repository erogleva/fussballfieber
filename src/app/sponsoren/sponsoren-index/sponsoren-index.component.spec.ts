import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorenIndexComponent } from './sponsoren-index.component';

describe('SponsorenIndexComponent', () => {
  let component: SponsorenIndexComponent;
  let fixture: ComponentFixture<SponsorenIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorenIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorenIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
