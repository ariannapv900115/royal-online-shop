import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { Product} from "../../../models/product";
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  // @ts-ignore
  modelSubscription: Subscription;
  constructor(public packageCartService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.packageCartService.product;
    /*this.modelSubscription = this.packageCartService.product$.asObservable()
      .subscribe((products: Product[]) => {
        this.productList = products;
      });*/
  }

}
