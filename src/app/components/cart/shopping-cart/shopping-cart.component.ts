import { Component, OnInit } from '@angular/core';
import {PackageCart} from "../../../models/packageCart";
import {ProductService} from "../../../service/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productInCart: PackageCart[]=[];
  itemSubscription: Subscription = new Subscription();
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productInCart = this.productService.package;
  }
  /*
  ngOnInit() {
    this.itemSubscription = this.productService.productInCart$.subscribe((item: PackageCart[]) => {
      this.productInCart = item;
    })
  }*/
}
