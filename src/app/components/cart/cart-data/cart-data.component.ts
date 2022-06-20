import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css']
})
export class CartDataComponent implements OnInit {
  @Input() amount: any;

  constructor() {
  }

  ngOnInit() {

  }

  openCartList() {

  }
}
