import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegelnComponent } from './regeln.component';

describe('RegelnComponent', () => {
  let component: RegelnComponent;
  let fixture: ComponentFixture<RegelnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegelnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
