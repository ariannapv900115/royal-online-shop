import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PackageCart} from "../../../models/packageCart";
import {ProductService} from "../../../service/product.service";
import {Subscription} from "rxjs";
import {ListType} from "../../../enum/type-list.enum";

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.css']
})
export class ShoppingCartDetailsComponent implements OnInit {

  @Input() packageCart: PackageCart;
  @Input() index: number = 0;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() amountProductSelected: EventEmitter<number> = new EventEmitter<number>();
  typeList: ListType = ListType.CART;
  canDeleteFromCart: boolean;
  amountUnits: number = 0;
  packageIndexSelected: number = 0;
  constructor(private packageCartService: ProductService) {
    this.canDeleteFromCart = false;
    this.packageCart = { product: {
        id:-1,
        price:0,
        name:'',
        src:'',
        description:'',
        amount:0
      }, amountSelected:0};
  }

   ngOnInit(): void {
     this.packageCartService.sendProductSelectedInCart(this.packageCart,this.index);
     this.packageCartService.getProductSelectedInCart().subscribe(pak =>{
       this.packageCart = pak;
     });
   }

  deleteFromCart() {
    this.canDeleteFromCart = true;
    this.deleteEvent.emit(this.packageCart.product.id);
  }

  updateAmountSelected(amountSelected: number) {
    this.amountUnits = amountSelected;
    this.amountProductSelected.emit(this.amountUnits);
  }
}
