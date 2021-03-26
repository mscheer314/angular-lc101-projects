import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadGifComponent } from './rad-gif.component';

describe('RadGifComponent', () => {
  let component: RadGifComponent;
  let fixture: ComponentFixture<RadGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
