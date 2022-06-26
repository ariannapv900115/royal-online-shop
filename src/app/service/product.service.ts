import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import { Product } from '../models/product';
import {PackageCart} from "../models/packageCart";
import { Order } from '../models/order';


@Injectable({providedIn:'root'})
export class ProductService {

  order: Order;
  //product-list
  product: PackageCart[]=[];
  productMock: Product[];
  //product-list-in-cart
  package: PackageCart[]=[];
  selectedProductIndex: number = 0;
  product$: Subject<PackageCart[]> = new Subject<PackageCart[]>();
  productInCart$: Subject<PackageCart[]> = new Subject<PackageCart[]>();
  selectedProduct$: Subject<PackageCart> = new Subject<PackageCart>();
  selectedProductInCart$: Subject<PackageCart> = new Subject<PackageCart>();
  selectedProductIndex$: Subject<number> = new Subject<number>();
  selectedProductIndexInCart$: Subject<number> = new Subject<number>();
  orderSubject$: Subject<Order> = new Subject<Order>();

  constructor() {
    this.order = {
      orderId: '',
      shippingAddress: {
        contact:{
          firstName: '',
          lastName: '',
          phoneNumbers:0,
          email: '',
        },
        addressLine1: '',
        addressLine2: '',
        city: '',
        postCode: '',
        state:'',
      },
      paymentMethod: {
        accountName: '',
        csv: 0,
        accountNumber: 0,
        expirationDate: '',
      },
      totalAmount:0,
      productTotal:0
    };
    this.productMock = [
      {
        id: 1,
        src: 'https://mdbootstrap.com/img/new/standard/city/043.webp',
        name: 'Package tour # 1',
        price: 400 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 6
      },
      {
        id: 2,
        src: 'https://mdbootstrap.com/img/new/standard/city/046.webp',
        name: 'Package tour # 2',
        price: 350 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 10
      },
      {
        id: 3,
        src: 'https://mdbootstrap.com/img/new/standard/city/039.webp',
        name: 'Package tour # 3',
        price: 1400 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 5
      },
      {
        id: 4,
        src: 'https://mdbootstrap.com/img/new/standard/city/044.webp',
        name: 'Package tour # 4',
        price: 350 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 10
      },
      {
        id: 5,
        src: 'https://mdbootstrap.com/img/new/standard/city/042.webp',
        name: 'Package tour # 5',
        price: 1000 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 6
      },
      {
        id: 6,
        src: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
        name: 'Package tour # 6',
        price: 780 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 4
      }];
  }

  getProductList(): Observable<PackageCart[]> {
    return this.product$.asObservable();
  }

  addProduct():void {
    this.productMock.forEach(productMock => {
      let pack  = {
        product : {
          id:-1,
          price:0,
          name:'',
          src:'',
          description:'',
          amount:0
        },
        amountSelected:0
      }
      pack.product = productMock;
      pack.amountSelected = 0;
      this.product.push(pack);

    });
    this.product$.next(this.product);
  }

  getOrder(): Observable<Order> {
    return this.orderSubject$.asObservable();
  }

  addOrder(order: Order):void {
    this.order = {
      orderId: order.orderId,
      shippingAddress: {
        contact:{
          firstName: order.shippingAddress.contact.firstName,
          lastName: order.shippingAddress.contact.lastName,
          phoneNumbers:order.shippingAddress.contact.phoneNumbers,
          email: order.shippingAddress.contact.email,
        },
        addressLine1: order.shippingAddress.addressLine1,
        addressLine2: order.shippingAddress.addressLine2,
        city: order.shippingAddress.city,
        postCode: order.shippingAddress.postCode,
        state: order.shippingAddress.state,
      },
      paymentMethod: {
        accountName: order.paymentMethod.accountName,
        csv: order.paymentMethod.csv,
        accountNumber: order.paymentMethod.accountNumber,
        expirationDate: order.paymentMethod.expirationDate,
      },
      totalAmount:order.totalAmount,
      productTotal:order.productTotal,
    };
    this.orderSubject$.next(this.order);
  }

  getProductInCart(): Observable<PackageCart[]> {
    return this.productInCart$.asObservable();
  }

  addProductToCart(product: Product, amountSelected: number): void {
    let pack  = {
      product : {
        id:-1,
        price:0,
        name:'',
        src:'',
        description:'',
        amount:0
      },
      amountSelected:0
    }
    let existProduct = false;
    let index =
      !!this.package && this.package.length == 0
      ? null
      : this.package.find(p => {
        if (p.product.id === product.id){
          p.amountSelected = amountSelected;
          existProduct = true;
        }
        else existProduct = false;
      });
     if(!existProduct && (index == null || index === undefined)){
       pack.product = product;
       pack.amountSelected = amountSelected;
       this.package.push(pack)
     }
    this.productInCart$.next(this.package);
  }

  removeProductFromCart(productId: number): void {
    if(!!this.package && this.package.length > 0){
      this.package.forEach((value,index)=>{
        if(value.product.id==productId)
          this.package.splice(index,1);
      });
      this.productInCart$.next(this.package);
    }
  }

  getProductSelectedInCart(): Observable<PackageCart> {
    return this.selectedProductInCart$.asObservable();
  }

  sendProductSelectedInCart(product: PackageCart, index: number): void {
    this.selectedProductIndex = index;
    this.selectedProductIndexInCart$.next(this.selectedProductIndex);
    this.selectedProductInCart$.next(product);
  }


  getProductSelected(): Observable<PackageCart> {
    return this.selectedProduct$.asObservable();
  }

  sendProductSelected(product: PackageCart, index: number): void {
    this.selectedProductIndex = index;
    this.selectedProductIndex$.next(this.selectedProductIndex);
    this.selectedProduct$.next(product);
  }

  getIndexOfProductSelected() {
    return this.selectedProductIndex$.asObservable();
  }

  getIndexOfProductSelectedInCart() {
    return this.selectedProductInCart$.asObservable();
  }

  updatePackageAmount(index: number, amount: number): void {
    this.product[index].amountSelected = amount;
  }

  updatePackageAmountInCart(index: number, amount: number): void {
    this.package[index].amountSelected = amount;
  }

  NextProductInCart() {
    this.productInCart$.next(this.package);
  }
  NextProductList() {
    this.product$.next(this.product);
  }
}
