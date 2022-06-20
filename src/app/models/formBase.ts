import {FormGroup, ɵElement} from "@angular/forms";

export class FormBase<T> {
  constructor(formGroup: FormGroup<{ [K in keyof { amount: string }]: ɵElement<{ amount: string }[K], null> }>) {

  }
}
