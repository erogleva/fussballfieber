import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielTimeLineComponent } from './spiel-time-line.component';

describe('SpielTimeLineComponent', () => {
  let component: SpielTimeLineComponent;
  let fixture: ComponentFixture<SpielTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
