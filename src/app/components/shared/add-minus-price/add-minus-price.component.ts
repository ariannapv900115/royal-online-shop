import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Subject, Subscription, takeUntil} from "rxjs";
import {PackageCart} from "../../../models/packageCart";
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'app-add-minus-price',
  templateUrl: './add-minus-price.component.html',
  styleUrls: ['./add-minus-price.component.css'],
})
export class AddMinusPriceComponent implements OnInit {

  package: PackageCart;
  packagePrice : number = 0;
  amountUnits: number;
  @Output() amountProductSelected: EventEmitter<number> = new EventEmitter<number>();
  modelSubscription: Subscription;
  constructor(public packageCartService: ProductService) {
    this.package = { product: {
        id:-1,
        price:0,
        name:'',
        src:'',
        description:'',
        amount:0
      }, amountSelected:0};
    this.amountUnits = 0;
    this.modelSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.packageCartService.getProductSelected().subscribe(pk => {
      this.package = pk;
      this.packagePrice = pk.product.price;
      this.amountUnits = pk.amountSelected;
    });
  }
  ngOnDestroy(): void {
    this.modelSubscription.unsubscribe();
  }
  resetAmountProductSelected(): void {
    this.amountUnits = 0;
  }

  onChangeAmount($event: string): void {
    if(this.amountUnits > 0 && $event === 'minus'){
      this.amountUnits = this.amountUnits - 1;
    }else{
      if(this.amountUnits < this.package.product.amount && $event === 'plus'){
        this.amountUnits = this.amountUnits + 1;
      }
    }
    this.packagePrice = this.amountUnits * this.package.product.price;
    this.amountProductSelected.emit(this.amountUnits);
  }
}
