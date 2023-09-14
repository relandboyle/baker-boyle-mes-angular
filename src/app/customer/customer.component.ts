import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormGroup } from '@angular/forms';

import { Customer } from 'src/constants/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customer!: any;

  constructor(
    private customerService: CustomerService
  ) { }

  getCustomer(id: string): void {
    this.customerService.getCustomer(id).subscribe({
      next: cust => this.customer = cust,
      error: err => console.error(err),
      complete: () => console.log(`Found Customer ${id}!`)
    });
  }

  createCustomer(values: FormGroup): void {
    console.log('VALUES: ', values);
    const customer: Customer = {...values.value};
    this.customerService.createCustomer(customer).subscribe(console.log);
  }

}
