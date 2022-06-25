import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Subscription} from "rxjs";
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modelSubscription: Subscription;
  constructor(public productService: ProductService) {
    this.modelSubscription = new Subscription();
  }

  ngOnInit(): void {

  }

}
