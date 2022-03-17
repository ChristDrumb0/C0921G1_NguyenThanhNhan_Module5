import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  createCustomer(customerObj: Customer): Observable<void> {

    return this.http.post<void>(this.API_URL, customerObj)
  }

  findCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.API_URL +'/' +id);
  }

  updateCustomer(id: number, product: Customer): Observable<void> {
    return this.http.patch<void>(this.API_URL  +'/'+ id, product);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL +'/'+ id);
  }
}
