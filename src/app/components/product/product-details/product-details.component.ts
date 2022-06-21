import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product : any = {};

  constructor(public packageCartService: ProductService) { }

  ngOnInit(): void {

  }
  addProductToCart(amountSelected: number): void {
    this.packageCartService.addProductToCart(this.product, amountSelected)
  }
}
