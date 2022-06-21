import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import { Product } from 'src/app/models/product';
import {DataService} from "../../../service/data-service";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  @Output() amountPerProductSelected: EventEmitter<number> = new EventEmitter<number>();
  product: any;
  closed: boolean;
  modelSubscription: Subscription;
  amountSelected: number = 0;

  constructor(public packageCartService: ProductService, private dataService: DataService) {
    this.closed =  this.dataService.getClose();
    this.modelSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.packageCartService.getProductSelected().subscribe(prod => {
       this.product = prod;
    });
  }

  closeDetail(): void {
    this.dataService.changeCloseDetails();
  }

  amountProductSelected(amountSelected: number) {
   this.amountSelected = amountSelected;
  }

  addToCart() {
    this.amountPerProductSelected.emit(this.amountSelected);
  }
}
