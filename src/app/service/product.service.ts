import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import { Product } from '../models/product';
import {PackageCart} from "../models/packageCart";


@Injectable({providedIn:'root'})
export class ProductService {

  product: PackageCart[]=[];
  productMock: Product[];
  package: PackageCart[]=[];
  selectedProductIndex: number = 0;
  product$: Subject<PackageCart[]> = new Subject<PackageCart[]>();
  productInCart$: Subject<PackageCart[]> = new Subject<PackageCart[]>();
  selectedProduct$: Subject<PackageCart> = new Subject<PackageCart>();
  selectedProductIndex$: Subject<number> = new Subject<number>();

  constructor() {
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

  addProduct(): PackageCart[] {
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
      this.product$.next(this.product);
    });
    return this.product;
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
      // @ts-ignore
      let indexPack = this.package.findIndex(p => p.product.id === productId);
      if(indexPack > -1){
        this.productInCart$.next(this.package.slice(indexPack,1));
      }
    }
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

  updatePackageAmount(index: number, amount: number): void {
    this.product[index].amountSelected = amount;
  }
}
