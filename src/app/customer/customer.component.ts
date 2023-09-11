import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

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
  
}
