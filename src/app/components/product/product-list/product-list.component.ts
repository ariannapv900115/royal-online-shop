import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product} from "../../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  // @ts-ignore
  modelSubscription: Subscription;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.product;
      this.modelSubscription = this.productService.getProductList()
      .subscribe((products: Product[]) => {
        this.productList = products;
        console.log(this.productList)
      });
  }
}
