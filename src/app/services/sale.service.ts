import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { SalesOrder } from 'src/constants/sales-order-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  salesOrderUrl = 'http://localhost:8089/api/v1/salesOrders';
  reqHeaders: Headers;

  constructor(
    private http: HttpClient
  ) {
    this.reqHeaders = new Headers()
      this.reqHeaders.set('Content-Type', 'application/json')
      this.reqHeaders.set('Accept', 'application/json')
  }

  createSalesOrder(newSalesOrder: SalesOrder): Observable<HttpResponse<SalesOrder>> {
    this.reqHeaders.set("X-Custom-Header", "CREATE SALES ORDER");
    const httpHeaders = new HttpHeaders(this.reqHeaders);

    return this.http.post<SalesOrder>(this.salesOrderUrl, newSalesOrder, {
      headers: httpHeaders,
      observe: 'response'
    });
  }
}
