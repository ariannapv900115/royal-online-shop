import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  date:  any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {

  }

}
