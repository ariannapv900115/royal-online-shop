import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import { Product } from '../models/product';
import {PackageCart} from "../models/packageCart";


@Injectable()
export class ProductService {

  product: Product[]=[];
  productMock: Product[];
  package: PackageCart[]=[];
  product$: Subject<Product[]> = new Subject<Product[]>();
  productInCart$: Subject<PackageCart[]> = new Subject<PackageCart[]>();

  constructor() {
    this.productMock = [
      {
        id: 1,
        src: 'https://mdbootstrap.com/img/new/standard/city/043.webp',
        title: 'Package tour # 1',
        price: 400 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 6
      },
      {
        id: 2,
        src: 'https://mdbootstrap.com/img/new/standard/city/044.webp',
        title: 'Package tour # 2',
        price: 350 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 10
      },
      {
        id: 3,
        src: 'https://mdbootstrap.com/img/new/standard/city/042.webp',
        title: 'Package tour # 3',
        price: 1000 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 6
      },
      {
        id: 4,
        src: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
        title: 'Package tour # 4',
        price: 780 ,
        description: ' This is a longer card with supporting text below as a natural lead-in additional content.',
        amount: 4
      }];
  }
  getProductList(): Observable<Product[]> {
    this.addProduct();
    return this.product$.asObservable();
  }
  addProduct(): void {
    this.productMock.forEach(productMock => {
      this.product.push(productMock);
    });
    this.product$.next(this.product);
  }
  getProductInCart(): Observable<PackageCart[]> {
    return this.productInCart$.asObservable();
  }
  addProductToCart(product: Product, amountSelected: number): void {
    // @ts-ignore
    let pack : PackageCart = { product: '',amountSelected:0}
      if(!!this.package && this.package.length > 0){
        // @ts-ignore
        this.pack = this.package.map(p => {
          // @ts-ignore
          if(p.product.id === product.id)
            p.amountSelected = amountSelected;
      });}
      else {
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
}
