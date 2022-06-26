import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from "../../../service/product.service";
import {Order} from "../../../models/order";


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  @Input() order: Order;
  @Output() formGroupEventEmitterCSV = new EventEmitter<FormGroup>();
  @Output() formGroupEventEmitterPaymentMethod = new EventEmitter<FormGroup>();
  paymentMethod: FormGroup;
  csv: FormGroup;
  submit: boolean;


  constructor(public fb: FormBuilder, private productService: ProductService) {
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
    this.paymentMethod = this.fb.group({});
    this.csv = this.fb.group({});

  }

  ngOnInit(): void {
    this.csv = this.fb.group({
      inputCSV: ['', { updateOn: 'blur' }, [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
    this.paymentMethod = this.fb.group({
      inputCardNumber: ['', { updateOn: 'blur' }, [Validators.required,
        Validators.pattern("/^-?(0|[1-9]\d*)?$/")]],
      inputCardHolder: ['', { updateOn: 'blur' }, [Validators.required]],
      inputMountYearExpiration: ['', { updateOn: 'blur'},[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
     });
    this.csv.valueChanges
      .subscribe(formControls => {
        this.order.paymentMethod.csv = formControls.inputCSV;
        this.formGroupEventEmitterCSV.emit(this.csv);
      });
    this.paymentMethod.valueChanges
      .subscribe(formControls => {
        this.order.paymentMethod.csv = formControls.inputCSV;
        this.order.paymentMethod.accountName = formControls.inputCardHolder;
        this.order.paymentMethod.accountNumber = formControls.inputCardNumber;
        this.order.paymentMethod.expirationDate = formControls.inputMountYearExpiration;
        this.formGroupEventEmitterPaymentMethod.emit(this.paymentMethod);
      });
  }

  cleanData() {
    this.csv.reset();
    this.paymentMethod.reset();
  }

  addPaymentMethod() {
    this.formGroupEventEmitterPaymentMethod.emit(this.paymentMethod);
    this.formGroupEventEmitterCSV.emit(this.csv);
  }
  setInputStyles(control: AbstractControl): any {
    return { 'is-invalid': this.evaluateUserInteractionWithInput(control) };
  }
  evaluateUserInteractionWithInput(control: AbstractControl): boolean {
    return (
      this.evaluateFormStatusWithSubmit(this.paymentMethod, control) ||
      this.evaluateControl(control)
    );
  }
  evaluateUserInteractionWithInputCvs(control: AbstractControl): boolean {
    return (
      this.evaluateFormStatusWithSubmit(this.csv, control) ||
      this.evaluateControl(control)
    );
  }
  evaluateFormStatusWithSubmit(formGroup: FormGroup, controler: AbstractControl): boolean {
    return (
      (!formGroup.touched && this.submit) || (formGroup.invalid && this.submit && controler.invalid)
    );
  }
  private evaluateControl(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }
}
