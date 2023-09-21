import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, tap } from 'rxjs';

import { Customer } from 'src/constants/customer-model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
  });
  editmode = new BehaviorSubject<boolean>(false);
  @Output() customer$ = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {

  }

  toggleEditmode(): void {
    const currentMode = this.editmode.getValue();
    this.editmode.next(!currentMode);
  }

  createCustomer(): void {
    this.customer$.emit(this.customerForm);
  }

}

