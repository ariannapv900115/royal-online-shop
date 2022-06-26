import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from "../../../service/product.service";
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit  {
  @Input() productTotal: number = 0;
  @Input() orderTotal: number = 0
  constructor(public packageService: ProductService){

  }
  ngOnInit(): void {
    this.packageService.NextProductInCart();

  }
 }
