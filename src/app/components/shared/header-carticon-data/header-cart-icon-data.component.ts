import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductService} from "../../../service/product.service";
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-cart-data',
  templateUrl: './header-cart-icon-data.component.html',
  styleUrls: ['./header-cart-icon-data.component.css']
})
export class HeaderCartIconDataComponent implements OnInit {
  amount: number;
  modelSubscription: Subscription;
  constructor(private packageCartService: ProductService) {
   this.amount = 0;
   this.modelSubscription = new Subscription();
  }

  ngOnInit() {
    this.modelSubscription = this.packageCartService.getProductInCart()
      .subscribe((model: PackageCart[]) => {
        this.amount = 0;
        model.forEach(pk => {
          this.amount += pk.amountSelected;
        });
      });
  }
}
