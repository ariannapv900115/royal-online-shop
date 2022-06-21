import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {
  @Input() product: any;
  @Output() amountPerProductSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  closed: boolean = false;
  amountSelected: number = 0;
  constructor(public packageCartService: ProductService) {}

  ngOnInit(): void {
  }

  closeDetail(): void {
    this.closed = true;
      this.close.emit(true);

  }

  amountProductSelected(amountSelected: number) {
   this.amountSelected = amountSelected;
  }

  addToCart() {
    this.amountPerProductSelected.emit(this.amountSelected);
  }
}
