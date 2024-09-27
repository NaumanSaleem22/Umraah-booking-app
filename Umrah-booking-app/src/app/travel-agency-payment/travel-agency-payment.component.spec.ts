import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgencyPaymentComponent } from './travel-agency-payment.component';

describe('TravelAgencyPaymentComponent', () => {
  let component: TravelAgencyPaymentComponent;
  let fixture: ComponentFixture<TravelAgencyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelAgencyPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelAgencyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
