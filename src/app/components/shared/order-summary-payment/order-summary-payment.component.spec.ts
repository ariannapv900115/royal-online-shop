import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryPaymentComponent } from './order-summary-payment.component';

describe('PackagePriceComponent', () => {
  let component: OrderSummaryPaymentComponent;
  let fixture: ComponentFixture<OrderSummaryPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummaryPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
