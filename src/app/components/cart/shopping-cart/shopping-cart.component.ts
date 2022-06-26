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

  itemSubscription: Subscription = new Subscription();
  productInCart: PackageCart[]=[];
  canEdit: boolean;
  orderTotal: number = 0;
  productTotal: number = 0;
  amountProductSelected: number;
  isAmountSelectedChanged: boolean;
  packageIndexSelected: number;
  constructor(private productService: ProductService) {
    this.canEdit = false;
    this.packageIndexSelected = -1;
    this.isAmountSelectedChanged = false;
    this.amountProductSelected = 0;
  }

   ngOnInit(): void {
     this.itemSubscription = this.updateProductList();
     this.productService.NextProductInCart();
   }
   updateProductList(): Subscription {
     this.productService.getIndexOfProductSelectedInCart();
     return this.productService.getProductInCart()
       .subscribe((model: PackageCart[]) => {
         this.productInCart = model;
         this.orderTotal = 0;
         this.productTotal = 0;
         model.forEach(pk => {
           this.orderTotal += pk.amountSelected * pk.product.price;
           this.productTotal += pk.amountSelected;
         });
       });
    }

   showEditAmount(){
    this.canEdit = !this.canEdit;
   }

  deleteFromCartById(id: number): void {
    this.productService.removeProductFromCart(id);
    this.updateProductList();
  }

  updateAmountSelectedInCart(amount: number) {
    this.isAmountSelectedChanged = this.amountProductSelected !== amount;
    this.amountProductSelected = amount;
    this.productService.updatePackageAmountInCart(this.packageIndexSelected, this.amountProductSelected);
  }
}
