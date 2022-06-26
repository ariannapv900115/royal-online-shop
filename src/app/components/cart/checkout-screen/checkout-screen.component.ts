import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Order } from 'src/app/models/order';
import {ProductService} from "../../../service/product.service";
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-checkout-screen',
  templateUrl: './checkout-screen.component.html',
  styleUrls: ['./checkout-screen.component.css']
})
export class CheckoutScreenComponent implements OnInit  {


  @Output() amountProductSelected : EventEmitter<number> = new EventEmitter<number>();
  packagePrice : number = 0;
  amountUnits: number= 0;
  amountForm: FormGroup;
  order: Order;
  modal: boolean;

  constructor(public fb: FormBuilder, public packageService: ProductService) {
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
    this.amountForm = this.fb.group({});
    this.modal = false;
  }

  ngOnInit(): void {
    this.packageService.NextProductInCart();
    this.packageService.getProductInCart()
      .subscribe((model: PackageCart[]) => {
        this.amountUnits = 0;
        model.forEach(pk => {
          this.amountUnits += pk.amountSelected;
          this.packagePrice += this.amountUnits * pk.product.price;
        });
        this.order.totalAmount = this.packagePrice;
        this.order.productTotal = this.amountUnits;
        this.packageService.addOrder(this.order);
      });

  }


  updateCSVInOrder(csv: FormGroup) {
    this.order.paymentMethod.csv = csv.get('inputCSV')?.value;
    this.packageService.addOrder(this.order);
  }

  PaymentMethodInOrder(paymentMethod: FormGroup) {
    this.order.paymentMethod.accountNumber = paymentMethod.get('inputCardNumber')?.value;
    this.order.paymentMethod.accountName = paymentMethod.get('inputCardHolder')?.value;
    this.order.paymentMethod.expirationDate = paymentMethod.get('inputMountYearExpiration')?.value;
    this.packageService.addOrder(this.order);
  }

  updateShippingAddressInOrder(basicInfoFormGroup: FormGroup) {
    this.order.shippingAddress.contact.firstName = basicInfoFormGroup.get('inputName')?.value;
    this.order.shippingAddress.contact.lastName = basicInfoFormGroup.get('inputLastName')?.value;
    this.order.shippingAddress.contact.email = basicInfoFormGroup.get('inputEmail')?.value;
    this.order.shippingAddress.contact.phoneNumbers = basicInfoFormGroup.get('inputPhone')?.value;
    this.order.shippingAddress.addressLine1 = basicInfoFormGroup.get('inputAddress')?.value;
    this.order.shippingAddress.addressLine2 = basicInfoFormGroup.get('inputAddress2')?.value;
    this.order.shippingAddress.city = basicInfoFormGroup.get('inputCity')?.value;
    this.order.shippingAddress.state = basicInfoFormGroup.get('inputState')?.value;
    this.order.shippingAddress.postCode = basicInfoFormGroup.get('inputZip')?.value;
    this.packageService.addOrder(this.order);
  }

  sendModal(showModal: boolean) {
    this.modal = showModal
  }
}
