import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product} from "../../../models/product";
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: PackageCart[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productList = this.productService.addProduct();
  }

}
