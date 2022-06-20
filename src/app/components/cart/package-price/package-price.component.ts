import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-package-price',
  templateUrl: './package-price.component.html',
  styleUrls: ['./package-price.component.css']
})
export class PackagePriceComponent implements OnInit  {
  @Input() product: any;
  amountUnits: any;
  @Output() formGroupEventEmitter : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() amountProductSelected : EventEmitter<number> = new EventEmitter<number>();
  packagePrice : number = 0;
 // public simpleObservable$: Observable<number> = new Observable<number>();
  priceForm :FormGroup;
  amountForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.priceForm = this.fb.group({price:''});
    this.amountForm = this.fb.group({});
  }

  ngOnInit(): void {
    /* this.simpleObservable$ = new Observable((observer) => {
      // observable execution
      observer.next(9);
      observer.complete();
    });
    this.simpleObservable$.subscribe(val => console.log(val));*/

    this.priceForm.setValue({price:this.product.price});
    this.packagePrice = this.product.price;
    this.setAmount();
  }
  updatePackageAmount(formGroup: FormGroup): void {
    this.amountForm = formGroup;
    this.updatePackagePriceAmount();
  }
  updatePackagePriceAmount(): void {
    this.setAmount();
    if(this.amountUnits > 0){
      this.packagePrice = this.amountUnits * this.product.price;
      this.priceForm.controls['price'].setValue(this.packagePrice);
      this.amountProductSelected.emit(this.amountUnits);
    }
  }
  setAmount() {
    let temp = this.amountForm.get('amount');
    this.amountUnits =  temp != undefined && temp != null ? temp.value : 1;
  }
}
