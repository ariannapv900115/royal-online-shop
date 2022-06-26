import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ProductService} from "./service/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';

  modelSubscription: Subscription;

  constructor(public productService: ProductService) {
    this.modelSubscription = new Subscription();

  }
  ngOnInit(): void {
    this.productService.addProduct();
  }
}
