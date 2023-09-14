import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Customer } from 'src/constants/customer-model';
import { User } from 'src/constants/user-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl = 'http://localhost:8089/customers';
  reqHeaders: Headers;
  staticTestUser: User = {
    userId: '1234567890',
    firstName: 'Mark',
    lastName: 'Zuckerberg'
  }

  constructor(
    private http: HttpClient
  ) {
    this.reqHeaders = new Headers()
      this.reqHeaders.set('Content-Type', 'application/json')
      this.reqHeaders.set('Accept', 'application/json')
  }

  getCustomer(custId: string): Observable<HttpResponse<Customer>> {
    const httpHeaders = new HttpHeaders(this.reqHeaders);
    return this.http.get<Customer>(this.customerUrl, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  createCustomer(customer: Customer): Observable<HttpResponse<Customer>> {
    this.reqHeaders.set("X-Custom-Test", "Testing APPEND method!")
    const httpHeaders = new HttpHeaders(this.reqHeaders);
    console.log(httpHeaders)
    return this.http.post<Customer>(this.customerUrl, customer, {
      headers: httpHeaders,
      observe: 'response'
    })
  }

  // updateCustomer(update: Customer): Observable<HttpResponse<Customer>> {
  //   return this.http.put<Customer>(this.customerUrl, update, {
  //     headers: this.reqHeaders,
  //     observe: 'response'
  //   })
  // }

  // deleteCustomer(custId: string): Observable<HttpResponse<Customer>> {
  //   return this.http.delete<Customer>(this.customerUrl + `/${custId}`, {
  //     headers: this.reqHeaders,
  //     observe: 'response'
  //   })
  // }
}
