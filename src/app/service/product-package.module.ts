import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductService } from './product.service';
import {ProductListComponent} from "../components/product/product-list/product-list.component";
import {PackagePriceComponent} from "../components/cart/package-price/package-price.component";
import {AddMinusPriceComponent} from "../components/shared/add-minus-price/add-minus-price.component";
import {SidepanelComponent} from "../components/shared/sidepanel/sidepanel.component";
import {ProductDetailsComponent} from "../components/product/product-details/product-details.component";
import {SeeDetailsComponent} from "../components/product/see-details/see-details.component";
import {ShoppingCartComponent} from "../components/cart/shopping-cart/shopping-cart.component";
import {CartListComponent} from "../components/cart/cart-list/cart-list.component";
import {AddProductComponent} from "../components/product/add-product/add-product.component";
import {HomePageComponent} from "../components/shared/home-page/home-page.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductListComponent,
    AddProductComponent,
    AddMinusPriceComponent,
    SidepanelComponent,
    PackagePriceComponent,
    CartListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    SeeDetailsComponent,
    HomePageComponent,
  ],
  exports: [
    ProductListComponent,
    AddProductComponent,
    AddMinusPriceComponent,
    SidepanelComponent,
    PackagePriceComponent,
    CartListComponent,
  ],
  providers: [
    ProductService
  ]
})
export class PackageCartModule { }
