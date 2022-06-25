import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from './service/product.service';
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {PackagePriceComponent} from "./components/cart/package-price/package-price.component";
import {AddMinusPriceComponent} from "./components/shared/add-minus-price/add-minus-price.component";
import {SidePanelComponent} from "./components/shared/sidepanel/side-panel.component";
import {ProductCardComponent} from "./components/product/product-card/product-card.component";
import {ProductDetailsComponent} from "./components/product/product-details/product-details.component";
import {ShoppingCartComponent} from "./components/cart/shopping-cart/shopping-cart.component";
import {HomePageComponent} from "./components/shared/home-page/home-page.component";
import {DataService} from "./service/data-service";
import {OrderSummaryComponent} from "./components/cart/order-summary/order-summary.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductListComponent,
    AddMinusPriceComponent,
    SidePanelComponent,
    PackagePriceComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    HomePageComponent,
    OrderSummaryComponent
  ],
  exports: [
    ProductListComponent,
    AddMinusPriceComponent,
    SidePanelComponent,
    PackagePriceComponent,
  ],
  providers: [
    ProductService,
    DataService
  ]
})
export class PackageCartModule { }
