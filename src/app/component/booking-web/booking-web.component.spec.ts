import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingWebComponent } from './booking-web.component';

describe('BookingWebComponent', () => {
  let component: BookingWebComponent;
  let fixture: ComponentFixture<BookingWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
