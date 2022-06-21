import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {DataService} from "../../../service/data-service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product : any = {};
  @Input() index: number;
  @Input() changeProduct: any
 productSelected : Product;
  constructor(public packageCartService: ProductService,public dataService: DataService) {
    this.index = 0;
    this.productSelected = this.product;
  }

  ngOnInit(): void {
  }

  addProductToCart(amountSelected: number): void {
    this.packageCartService.addProductToCart(this.product, amountSelected)
  }

  showDetails() {
    this.dataService.changeCloseDetails();
    this.sendPackageSelected();

  }
  sendPackageSelected() {
    this.packageCartService.sendProductSelected(this.product,this.index)
  }

    onSelectionChange(): void {
    this.packageCartService.getProductSelected().subscribe(prod => {
        this.product = prod;
    });
  }
}
