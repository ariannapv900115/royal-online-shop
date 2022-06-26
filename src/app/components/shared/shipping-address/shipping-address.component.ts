import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Order} from "../../../models/order";


@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  @Input() order: Order;
  @Output() formGroupEventEmitter = new EventEmitter<FormGroup>();
  basicInfoFormGroup: FormGroup;
  submit: boolean;

  constructor(public fb: FormBuilder) {
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
    this.basicInfoFormGroup = this.fb.group({});
  }

  ngOnInit(): void {
    this.basicInfoFormGroup = this.fb.group({
      inputName: ['', { updateOn: 'blur' }, [Validators.required]],
      inputLastName: ['', { updateOn: 'blur' }, [Validators.required]],
      inputEmail: ['', { updateOn: 'blur' },[Validators.required, Validators.email]],
      inputPhone: ['', { updateOn: 'blur' }],
      inputAddress: ['', { updateOn: 'blur' }, [Validators.required]],
      inputAddress2: ['', { updateOn: 'blur' }, [Validators.required]],
      inputCity: ['', { updateOn: 'blur' }, [Validators.required]],
      inputState: ['', { updateOn: 'blur' }, [Validators.required]],
      inputZip: ['', { updateOn: 'blur' }, [Validators.required]],
    });

      this.basicInfoFormGroup.valueChanges
        .subscribe(formControls => {
          this.order.shippingAddress.contact.firstName = formControls.inputName;
          this.order.shippingAddress.contact.lastName = formControls.inputLastName;
          this.order.shippingAddress.contact.email = formControls.inputEmail;
          this.order.shippingAddress.contact.phoneNumbers = formControls.inputPhone;
          this.order.shippingAddress.addressLine1 = formControls.inputAddress;
          this.order.shippingAddress.addressLine2 = formControls.inputAddress2;
          this.order.shippingAddress.city = formControls.inputCity;
          this.order.shippingAddress.state = formControls.inputState;
          this.order.shippingAddress.postCode = formControls.inputZip;
          this.formGroupEventEmitter.emit(this.basicInfoFormGroup);
        });
  }

  cleanData() {
    this.basicInfoFormGroup.reset();
  }

  saveBasicInformation() {
    this.formGroupEventEmitter.emit(this.basicInfoFormGroup);
  }
  setInputStyles(control: AbstractControl): any {
    return { 'is-invalid': this.evaluateUserInteractionWithInput(control) };
  }
  evaluateUserInteractionWithInput(control: AbstractControl): boolean {
    return (
      this.evaluateFormStatusWithSubmit(this.basicInfoFormGroup, control) ||
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
