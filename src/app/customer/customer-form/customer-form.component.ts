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
    custId: [''],
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.min(3),
        Validators.maxLength(25)
      ]
    ],
    phonePrimary: ['', Validators.required],
    phoneSecondary: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ]
  });
  editmode = new BehaviorSubject<boolean>(false);
  @Output() customer$ = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {

  }

  toggleEditmode(): void {
    const currentMode = this.editmode.getValue();
    this.editmode.next(!currentMode);
  }

  submitForm(): void {
    console.log(typeof this.customerForm.value.custId)
    const id = this.customerForm.value.custId as string;
    this.customer$.emit(id);
  }

}
