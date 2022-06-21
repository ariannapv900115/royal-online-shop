import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product} from "../../../models/product";
import {DataService} from "../../../service/data-service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productList = this.productService.addProduct();
  }

}
