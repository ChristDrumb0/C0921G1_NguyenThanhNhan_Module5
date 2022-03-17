import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { CustomerType } from '../models/customer-type';
import { HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) { }

  getCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + '/customerTypes');
  }

  saveCustomerType(customerType): Observable<CustomerType> {
    return this.http.post<CustomerType>(API_URL + '/customerTypes', customerType);
  }

  findById(id: number): Observable<CustomerType> {
    return this.http.get<CustomerType>(`${API_URL}/customerTypes/${id}`);
  }

  updateCustomerType(id: number, customerType: CustomerType): Observable<CustomerType> {
    return this.http.put<CustomerType>(`${API_URL}/customerTypes/${id}`, customerType);
  }

  deleteCustomerType(id: number): Observable<CustomerType> {
    return this.http.delete<CustomerType>(`${API_URL}/customerTypes/${id}`);
  }
}

