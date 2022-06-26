import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {DataService} from "../../../service/data-service";
import {Product} from "../../../models/product";
import {PackageCart} from "../../../models/packageCart";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() package : PackageCart;
  @Input() index: number;
  productSelected : Product;
  modelSubscription: Subscription;
  constructor(public packageCartService: ProductService,public dataService: DataService) {
    this.index = 0;
     this.package ={ product : {
        id:-1,
            price:0,
            name:'',
            src:'',
            description:'',
            amount:0
      }, amountSelected :0 }
     this.productSelected = this.package.product;
     this.modelSubscription = new Subscription();
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.modelSubscription.unsubscribe();
  }

  showDetails() {
    this.dataService.changeCloseDetails();
    this.sendPackageSelected();

  }
  sendPackageSelected() {
    this.packageCartService.sendProductSelected(this.package,this.index)
  }

}
