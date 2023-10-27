import { Component } from '@angular/core';

import { SaleService } from '../services/sale.service';
import { SalesOrder } from 'src/constants/sales-order-model';

@Component({
  selector: 'app-salesorder-form',
  templateUrl: './salesorder-form.component.html',
  styleUrls: ['./salesorder-form.component.scss']
})
export class SalesorderFormComponent {
  modelSale: SalesOrder = {
    status: 'pending',
    value: '2500',
    salesTax: '234',
    customerId: 'CUST-841977'
  };

  constructor(
    private saleService: SaleService
  ) { }


  createSalesOrder(): void {
    this.saleService.createSalesOrder(this.modelSale).subscribe({
      next: res => console.log(res),
      error: err => console.error(err),
      complete: () => console.log('Create Sales Order COMPLETE')
    })
  }

}
