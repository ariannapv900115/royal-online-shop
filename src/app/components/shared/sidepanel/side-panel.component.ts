import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../../service/data-service";
import {ProductService} from "../../../service/product.service";
import {PackageCart} from "../../../models/packageCart";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  packageIndexSelected: number;
  package: PackageCart;
  closed: boolean;
  modelSubscription: Subscription;
  amountProductSelected: number;
  isAmountSelectedChanged: boolean;
  constructor(private packageCartService: ProductService, private dataService: DataService) {
    this.packageIndexSelected = -1;
    this.closed =  this.dataService.getClose();
    this.modelSubscription = new Subscription();
    this.isAmountSelectedChanged = false;
    this.package = {product :  {
        id:-1,
        price:0,
        name:'',
        src:'',
        description:'',
        amount:0
    }, amountSelected :0}
    this.amountProductSelected = 0;
  }

  ngOnInit(): void {
    this.modelSubscription = this.packageCartService.getProductSelected().subscribe(prod => {
       this.package = prod
      this.amountProductSelected = prod.amountSelected;
      this.isAmountSelectedChanged = prod.amountSelected > 0;
    });
     this.packageCartService.getIndexOfProductSelected().subscribe(index => {
       this.packageIndexSelected = index;
     });
  }

  closeDetail(): void {
    this.dataService.changeCloseDetails();
  }

  addToCart() {
    if(this.isAmountSelectedChanged)
    this.packageCartService.addProductToCart(this.package.product, this.package.amountSelected);
  }

  updateAmountSelected(amount: number) {
    this.amountProductSelected = amount
    this.isAmountSelectedChanged = true;
    this.packageCartService.updatePackageAmount(this.packageIndexSelected, this.amountProductSelected);
  }
}
