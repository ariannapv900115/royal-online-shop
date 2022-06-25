import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit  {
  ngOnInit(): void {
  }
 /* @Input() product: any;
  amountUnits: any;
  @Output() formGroupEventEmitter : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() amountProductSelected : EventEmitter<number> = new EventEmitter<number>();
  packagePrice : number = 0;
  amountForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.amountForm = this.fb.group({});
  }

  ngOnInit(): void {
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
      this.amountProductSelected.emit(this.amountUnits);
    }
  }
  setAmount() {
    let temp = this.amountForm.get('amount');
    this.amountUnits =  temp != undefined && temp != null ? temp.value : 1;
  }
*/
  total_amount: number = 345;

}
