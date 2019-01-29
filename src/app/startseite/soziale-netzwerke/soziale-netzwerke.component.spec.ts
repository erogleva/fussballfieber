import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialeNetzwerkeComponent } from './soziale-netzwerke.component';

describe('SozialeNetzwerkeComponent', () => {
  let component: SozialeNetzwerkeComponent;
  let fixture: ComponentFixture<SozialeNetzwerkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozialeNetzwerkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozialeNetzwerkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
