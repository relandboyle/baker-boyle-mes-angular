import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormGroup } from '@angular/forms';

import { Customer } from 'src/constants/customer-model';
import { GenerateNewEntityId } from 'src/constants/generateEntityId';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer!: any;
  customerId = '';
  divArray = [ 1, 2, 3, 4, 5];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    console.log(GenerateNewEntityId([], 'CUST-'));
  }

  getCustomer(): void {
    console.log("ID: ", this.customerId);
    this.customerService.getCustomer(this.customerId).subscribe({
      next: cust => this.customer = cust,
      error: err => console.error(err),
      complete: () => console.log(`Found Customer ${this.customerId}!`)
    });
  }

  createCustomer(values: FormGroup): void {
    console.log('VALUES: ', values);
    const customer: Customer = {...values.value};
    this.customerService.createCustomer(customer).subscribe(console.log);
  }

  updateCustomer(values: FormGroup): void {
    const customer: Customer = {...values.value};
    this.customerService.updateCustomer(customer).subscribe(console.log);
  }

  deleteCustomer(): void {
    console.log("ID: ", this.customerId);
    this.customerService.deleteCustomer(this.customerId).subscribe({
      next: cust => this.customer = cust,
      error: err => console.error(err),
      complete: () => console.log(`Deleted Customer ${this.customerId}!`)
    });
  }

}
