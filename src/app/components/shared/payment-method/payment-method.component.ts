import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  date:  any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {

  }

}
