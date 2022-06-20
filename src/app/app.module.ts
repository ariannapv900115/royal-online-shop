import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/shared/home-page/home-page.component';
import {PackageCartModule} from "./service/product-package.module";
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {ProductDetailsComponent} from "./components/product/product-details/product-details.component";
import {ShoppingCartComponent} from "./components/cart/shopping-cart/shopping-cart.component";
import {HeaderComponent} from "./components/shared/header/header.component";
import {CartDataComponent} from "./components/cart/cart-data/cart-data.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'shopping_cart',
    component: ShoppingCartComponent
  },
  {
    path: '**',
    component: HomePageComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartDataComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    PackageCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
