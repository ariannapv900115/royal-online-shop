import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {PackageCart} from "../../../models/packageCart";
import {ProductService} from "../../../service/product.service";
import {ListType} from "../../../enum/type-list.enum";


@Component({
  selector: 'app-add-minus-price',
  templateUrl: './add-minus-price.component.html',
  styleUrls: ['./add-minus-price.component.css'],
})
export class AddMinusPriceComponent implements OnInit {

  @Input() typeList: ListType = ListType.PRODUCT;
  @Output() amountProductSelected: EventEmitter<number> = new EventEmitter<number>();
  package: PackageCart;
  packagePrice : number = 0;
  amountUnits: number;
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
    if(this.typeList == ListType.PRODUCT){
      this.packageCartService.getProductSelected().subscribe(pk => {
        this.package = pk;
        this.packagePrice = pk.product.price;
        this.amountUnits = pk.amountSelected;
      });
    }
    else {
      this.packageCartService.getProductSelectedInCart().subscribe(pk => {
        this.package = pk;
        this.packagePrice = pk.product.price;
        this.amountUnits = pk.amountSelected;
      });
    }

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
