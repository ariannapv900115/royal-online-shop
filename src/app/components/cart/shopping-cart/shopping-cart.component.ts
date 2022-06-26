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
  canEdit: boolean;
  constructor(public productService: ProductService) {
    this.canEdit = false;
  }

   ngOnInit(): void {

      this.productInCart = this.productService.package;

   }
   showEditAmount(){
    this.canEdit = !this.canEdit;
   }
}
