import { Component, OnInit } from '@angular/core';
import { Product} from "../../../models/product";
import {Observable} from "rxjs";
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private packageCartService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.packageCartService.product;
  }

}
