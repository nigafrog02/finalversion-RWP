import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskBookingComponent } from './kiosk-booking.component';

describe('KioskBookingComponent', () => {
  let component: KioskBookingComponent;
  let fixture: ComponentFixture<KioskBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KioskBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
