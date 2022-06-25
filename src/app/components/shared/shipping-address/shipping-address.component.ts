import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  date:  any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {

  }

}
