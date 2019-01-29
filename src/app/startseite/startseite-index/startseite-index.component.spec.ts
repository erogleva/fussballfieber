import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteIndexComponent } from './startseite-index.component';

describe('StartseiteIndexComponent', () => {
  let component: StartseiteIndexComponent;
  let fixture: ComponentFixture<StartseiteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartseiteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
