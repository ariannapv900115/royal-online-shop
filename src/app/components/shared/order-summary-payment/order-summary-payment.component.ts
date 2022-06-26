import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Order } from 'src/app/models/order';
import { ProductService } from 'src/app/service/product.service';
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-order-summary-payment',
  templateUrl: './order-summary-payment.component.html',
  styleUrls: ['./order-summary-payment.component.css']
})
export class OrderSummaryPaymentComponent implements OnInit  {
  @Input() order: Order;
  @Output() formGroupEventEmitter = new EventEmitter<Order>();
  @Output() submit = new EventEmitter<boolean>();
  fee: number;
  goodData: boolean;
  constructor(private packageCartService: ProductService){
    this.order = {
      orderId: '',
      shippingAddress: {
        contact:{
          firstName: '',
          lastName: '',
          phoneNumbers:0,
          email: '',
        },
        addressLine1: '',
        addressLine2: '',
        city: '',
        postCode: '',
        state:'',
      },
      paymentMethod: {
        accountName: '',
        csv: 0,
        accountNumber: 0,
        expirationDate: '',
      },
      totalAmount:0,
      productTotal:0
    };
    this.fee = 0;
    this.goodData = false;
  }
  ngOnInit(): void {
    this.packageCartService.getProductInCart()
      .subscribe((model: PackageCart[]) => {
        this.order.totalAmount = 0;
        this.order.productTotal = 0;
        model.forEach(pk => {
          this.order.totalAmount += pk.amountSelected * pk.product.price;
          this.order.productTotal += pk.amountSelected;
          this.packageCartService.addOrder(this.order);
        });
      });
    this.fee = this.order.totalAmount * 0.07;
    this.packageCartService.getOrder().subscribe(order =>{
      this.order = order;
      this.goodData = order.shippingAddress.addressLine1 != null &&
        order.shippingAddress.postCode != null &&
        order.shippingAddress.city != null &&
        order.shippingAddress.contact.firstName != null &&
        order.shippingAddress.contact.lastName != null &&
        order.shippingAddress.contact.phoneNumbers != 0 &&
        order.paymentMethod.accountName != '' &&
        order.paymentMethod.expirationDate != '' &&
        order.paymentMethod.csv != 0 &&
        order.paymentMethod.accountName != '';
    });
  }

  submitOrder() {
   this.submit.emit(true);
  }

}
