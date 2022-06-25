import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/shared/home-page/home-page.component';
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {ProductCardComponent} from "./components/product/product-card/product-card.component";
import {ShoppingCartComponent} from "./components/cart/shopping-cart/shopping-cart.component";
import {HeaderComponent} from "./components/shared/header/header.component";
import {HeaderCartIconDataComponent} from "./components/shared/header-carticon-data/header-cart-icon-data.component";
import {PackageCartModule} from "./shopping-online.module";


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
    component: ProductCardComponent
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
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCartIconDataComponent,
  ],
  imports: [
    BrowserModule,
    [ RouterModule.forRoot(appRoutes) ],
    ReactiveFormsModule,
    PackageCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
