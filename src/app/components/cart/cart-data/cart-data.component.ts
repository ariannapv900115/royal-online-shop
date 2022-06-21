import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductService} from "../../../service/product.service";
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css']
})
export class CartDataComponent implements OnInit {
  amount: number;
  // @ts-ignore
  modelSubscription: Subscription;
  constructor(public packageCartService: ProductService) {
   this.amount = 0;
  }

  ngOnInit() {
    this.amount = 0;
    this.modelSubscription = this.packageCartService.productInCart$
      .subscribe((model: PackageCart[]) => {
        model.forEach(pk => {
          this.amount += pk.amountSelected;
        });
      });
  }
}
