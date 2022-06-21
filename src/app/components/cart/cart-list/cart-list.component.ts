import {Component, Input, OnInit} from '@angular/core';
import {PackageCart} from "../../../models/packageCart";
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  // @ts-ignore
  @Input packageCart: PackageCart;
  totalPrice: any;
  showEditAmount: boolean = false;
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.totalPrice = this.packageCart.product.price * this.packageCart.amountSelected;
  }

  amountProductSelected($event: number) {

  }

  showEdit() {
    this.showEditAmount = !this.showEditAmount
  }

  removeFromCartList() {

  }
}
