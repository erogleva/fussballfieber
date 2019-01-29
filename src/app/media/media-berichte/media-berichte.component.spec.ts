import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBerichteComponent } from './media-berichte.component';

describe('MediaBerichteComponent', () => {
  let component: MediaBerichteComponent;
  let fixture: ComponentFixture<MediaBerichteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaBerichteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaBerichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
