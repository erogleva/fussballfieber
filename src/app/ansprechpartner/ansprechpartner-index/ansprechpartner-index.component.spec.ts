import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsprechpartnerIndexComponent } from './ansprechpartner-index.component';

describe('AnsprechpartnerIndexComponent', () => {
  let component: AnsprechpartnerIndexComponent;
  let fixture: ComponentFixture<AnsprechpartnerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsprechpartnerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsprechpartnerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
