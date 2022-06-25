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
    this.itemSubscription =  this.productService.getProductInCart().subscribe(packageCart =>{
      this.productInCart = packageCart;
    });
      this.productInCart = [
       {product:{
         id: 1,
         src: 'https://mdbootstrap.com/img/new/standard/city/043.webp',
         name: 'Package tour # 1',
         price: 400 ,
         description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
         amount: 6},amountSelected:8
       },
       {product:{
         id: 2,
         src: 'https://mdbootstrap.com/img/new/standard/city/046.webp',
         name: 'Package tour # 2',
         price: 350 ,
         description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
         amount: 10},amountSelected:7
       },
       {product:{
         id: 3,
         src: 'https://mdbootstrap.com/img/new/standard/city/039.webp',
         name: 'Package tour # 3',
         price: 1400 ,
         description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
         amount: 5},amountSelected:3
       },
       {product:{
         id: 4,
         src: 'https://mdbootstrap.com/img/new/standard/city/044.webp',
         name: 'Package tour # 4',
         price: 350 ,
         description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
         amount: 10},amountSelected:4
       },
       {product:{
         id: 5,
         src: 'https://mdbootstrap.com/img/new/standard/city/042.webp',
         name: 'Package tour # 5',
         price: 1000 ,
         description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
         amount: 6},amountSelected:3
       },
       {product:{
         id: 6,
         src: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
         name: 'Package tour # 6',
         price: 780 ,
         description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
         amount: 4},amountSelected:4
       }];
   }
   showEditAmount(){
    this.canEdit = !this.canEdit;
   }
}
