import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product} from "../../../models/product";
import {PackageCart} from "../../../models/packageCart";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: PackageCart[] = [];
  modelSubscription: Subscription;
  constructor(private productService: ProductService) {
    this.modelSubscription = new Subscription();
  }

  ngOnInit(): void {

    this.modelSubscription  = this.productService.getProductList().subscribe(product =>{
      this.productList = product;
    });
    this.productService.NextProductList();
  }

}
