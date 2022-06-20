import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() amountOfProductToCart = new EventEmitter<number>();
  @Input() product: any;

  constructor() { }

  ngOnInit() {
  }

  onSelected(amountSelected: number) {
    this.amountOfProductToCart.emit(amountSelected);
  }
}
