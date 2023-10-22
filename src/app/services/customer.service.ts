import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Customer } from 'src/constants/customer-model';
import { User } from 'src/constants/user-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl = 'http://localhost:8089/api/v1/customers';
  reqHeaders: Headers;

  constructor(
    private http: HttpClient
  ) {
    this.reqHeaders = new Headers()
      this.reqHeaders.set('Content-Type', 'application/json')
      this.reqHeaders.set('Accept', 'application/json')
  }

  getCustomer(custId: string): Observable<HttpResponse<Customer>> {
    this.reqHeaders.set("X-Custom-Header", "GET CUSTOMER");
    const httpHeaders = new HttpHeaders(this.reqHeaders);

    return this.http.get<Customer>(`${this.customerUrl}/${custId}`, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  createCustomer(newCustomer: Customer): Observable<HttpResponse<Customer>> {
    this.reqHeaders.set("X-Custom-Header", "CREATE CUSTOMER");
    const httpHeaders = new HttpHeaders(this.reqHeaders);

    return this.http.post<Customer>(this.customerUrl, newCustomer, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  updateCustomer(customerUpdate: Customer): Observable<HttpResponse<Customer>> {
    this.reqHeaders.set("X-Custom-Header", "UPDATE CUSTOMER");
    const httpHeaders = new HttpHeaders(this.reqHeaders);
    const custId = customerUpdate.customerId;

    return this.http.put<Customer>(`${this.customerUrl}/${custId}`, customerUpdate, {
      headers: httpHeaders,
      observe: 'response'
    })
  }

  deleteCustomer(custId: string): Observable<HttpResponse<Customer>> {
    this.reqHeaders.set("X-Custom-Header", "DELETE CUSTOMER");
    const httpHeaders = new HttpHeaders(this.reqHeaders);

    return this.http.delete<Customer>(this.customerUrl + `/${custId}`, {
      headers: httpHeaders,
      observe: 'response'
    })
  }
}
