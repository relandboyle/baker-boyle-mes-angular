import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Customer } from 'src/constants/customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl = 'http://localhost:8089/customers';

  constructor(
    private http: HttpClient
  ) { }

  getCustomer(custId: string): Observable<Customer> {
    console.log('CUSTOMER ID: ', custId);
    const reqHeaders = new HttpHeaders()
    .set("X-custId", custId)
    return this.http.get<Customer>(this.customerUrl, {
      headers: reqHeaders
    });
  }

  createCustomer(customer: Customer): Observable<HttpResponse<Customer>> {
    const requestHeaders = new HttpHeaders();
    return this.http.post<Customer>(this.customerUrl, customer, {
      headers: requestHeaders,
      observe: 'response'
    })
  }

  updateCustomer(update: Customer): Observable<HttpResponse<Customer>> {
    const requestHeaders = new HttpHeaders();
    return this.http.put<Customer>(this.customerUrl, update, {
      headers: requestHeaders,
      observe: 'response'
    })
  }

  deleteCustomer(custId: string): Observable<HttpResponse<Customer>> {
    const requestHeaders = new HttpHeaders();
    return this.http.delete<Customer>(this.customerUrl + `/${custId}`, {
      headers: requestHeaders,
      observe: 'response'
    })
  }
}
