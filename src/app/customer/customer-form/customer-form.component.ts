import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {
  customerForm = this.fb.group({
    customerId: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
  });
  editmode = new BehaviorSubject<boolean>(false);
  validId: string = '';
  @Output() newCustomer$ = new EventEmitter<FormGroup>();
  @Output() customerUpdate$ = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder,
  ) { }

  toggleEditmode(): void {
    const currentMode = this.editmode.getValue();
    this.editmode.next(!currentMode);
  }

  createCustomer(): void {
    this.newCustomer$.emit(this.customerForm);
  }

  updateCustomer(): void {
    this.customerUpdate$.emit(this.customerForm);
  }

}

