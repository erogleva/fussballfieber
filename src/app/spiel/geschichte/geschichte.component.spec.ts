import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschichteComponent } from './geschichte.component';

describe('GeschichteComponent', () => {
  let component: GeschichteComponent;
  let fixture: ComponentFixture<GeschichteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeschichteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeschichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
