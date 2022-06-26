import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PackageCart } from 'src/app/models/packageCart';
import { DataService } from 'src/app/service/data-service';
import {ProductService} from "../../../service/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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

  updateAmountSelected(amountSelected: number) {
    this.amountUnits = amountSelected;
    this.amountProductSelected.emit(this.amountUnits);
  }
}
