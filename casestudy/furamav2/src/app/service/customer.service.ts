import {Injectable} from '@angular/core';
import {Customer} from "../models/customer";
import {ListCustomerComponent} from "../customer/list-customer/list-customer.component";
import {CustomerType} from "../models/customer-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

  @Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
    private API_URL  = "http://localhost:3000/customer"
  // customerObj: Customer;
  // customerList: Customer[]
  //   = [
  //   {
  //     id: 'KH-0232',
  //     name: 'Screw Driver',
  //     dob: "22/02/2022",
  //     gender: 2,
  //     personalId: "123456789012",
  //     phone: "098765432109",
  //     email: "email@gmail.com",
  //     customerType: new CustomerType(1, "Diamond"),
  //     address: "Viet Nam"
  //   },
  //   {
  //     id: 'KH-0986',
  //     name: 'Nut Volt',
  //     dob: "22/02/2022",
  //     gender: 1,
  //     personalId: "123456789012",
  //     phone: "09876543210",
  //     email: "email@gmail.com",
  //     customerType: new CustomerType(2, "Platinum"),
  //     address: "Viet Nam"
  //   },
  //   {
  //     id: 'KH-0123',
  //     name: 'Resistor',
  //     dob: "22/02/2022",
  //     gender: 2,
  //     personalId: "123456789012",
  //     phone: "09876543210",
  //     email: "email@gmail.com",
  //     customerType: new CustomerType(3, "Gold"),
  //     address: "Viet Nam"
  //   },
  //   {
  //     id: 'KH-0555',
  //     name: 'Tractor',
  //     dob: "22/02/2022",
  //     gender: 1,
  //     personalId: "123456789012",
  //     phone: "09876543210",
  //     email: "email@gmail.com",
  //     customerType: new CustomerType(4, "Silver"),
  //     address: "Viet Nam"
  //   },
  //   {
  //     id: 'KH-0333',
  //     name: 'Roller',
  //     dob: "22/02/2022",
  //     gender: 2,
  //     personalId: "123456789012",
  //     phone: "09876543210",
  //     email: "email@gmail.com",
  //     customerType: new CustomerType(5, "Member"),
  //     address: "Viet Nam"
  //   },
  // ]

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<Customer[]> {
    // console.log(this.customerList);
    return this.http.get<Customer[]>(this.API_URL);
  }

  createCustomer(customerObj: Customer): Observable<void> {
    // console.log(customer);
    // return this.customerList.push(customer);
    return this.http.post<void>(this.API_URL, customerObj)
  }

  findCustomerById(id:string): Observable<Customer>{
    // return this.customerList.find(customer => customer.id === id );
    return this.http.get<Customer>(this.API_URL +'/' +id);
  }

  updateCustomer(id: number, product: Customer): Observable<void> {
    return this.http.patch<void>(this.API_URL  +'/'+ id, product);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(this.API_URL +'/'+ id);
  }
}
