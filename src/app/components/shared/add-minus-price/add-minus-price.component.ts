import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-add-minus-price',
  templateUrl: './add-minus-price.component.html',
  styleUrls: ['./add-minus-price.component.css'],
})
export class AddMinusPriceComponent implements OnInit {
  @Input() packageAvailable: any;
  @Output() formGroupEventEmitter : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  amount: any;
  // @ts-ignore
  amountForm: FormGroup;


  constructor(public fb :FormBuilder) {
    this.amount = 1
  }

  ngOnInit(): void {
    this.amountForm = this.fb.group({
      amount: [this.amount, { updateOn: 'blur' }]
    });
    this.formGroupEventEmitter.emit(this.amountForm);
  }


  minus(): void {
    if (this.amount > 1) {
      this.amount = this.amount - 1;
    }
    this.onSubmit();
  }
  add(): void {
    if(this.amount < this.packageAvailable)
    this.amount = this.amount + 1;
    this.onSubmit();
  }
  onSubmit() {
    this.amountForm.controls['amount'].setValue(this.amount);
    this.formGroupEventEmitter.emit(this.amountForm);
  }
}
