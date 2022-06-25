import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from './service/product.service';
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {CheckoutScreenComponent} from "./components/cart/checkout-screen/checkout-screen.component";
import {AddMinusPriceComponent} from "./components/shared/add-minus-price/add-minus-price.component";
import {SidePanelComponent} from "./components/shared/sidepanel/side-panel.component";
import {ProductCardComponent} from "./components/product/product-card/product-card.component";
import {ProductDetailsComponent} from "./components/product/product-details/product-details.component";
import {ShoppingCartComponent} from "./components/cart/shopping-cart/shopping-cart.component";
import {HomePageComponent} from "./components/shared/home-page/home-page.component";
import {DataService} from "./service/data-service";
import {OrderSummaryComponent} from "./components/cart/order-summary/order-summary.component";
import {ShippingAddressComponent} from "./components/shared/shipping-address/shipping-address.component";
import {PaymentMethodComponent} from "./components/shared/payment-method/payment-method.component";
import {OrderSummaryPaymentComponent} from "./components/shared/order-summary-payment/order-summary-payment.component";

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
    CheckoutScreenComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    HomePageComponent,
    OrderSummaryComponent,
    ShippingAddressComponent,
    PaymentMethodComponent,
    OrderSummaryPaymentComponent
  ],
  exports: [
    ProductListComponent,
    AddMinusPriceComponent,
    SidePanelComponent,
    CheckoutScreenComponent,
  ],
  providers: [
    ProductService,
    DataService
  ]
})
export class PackageCartModule { }
