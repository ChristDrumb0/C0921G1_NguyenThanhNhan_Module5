import {Injectable} from '@angular/core';
import {Customer} from "../models/customer";
import {ListCustomerComponent} from "../customer/list-customer/list-customer.component";
import {CustomerType} from "../models/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerObj: Customer;
  customerList: Customer[] = [
    {
      id: 'KH-0232',
      name: 'Screw Driver',
      dob: "22/02/2022",
      gender: 2,
      personalId: "123456789012",
      phone: "098765432109",
      email: "email@gmail.com",
      customerType: new CustomerType(1, "Diamond"),
      address: "Viet Nam"
    },
    {
      id: 'KH-0986',
      name: 'Nut Volt',
      dob: "22/02/2022",
      gender: 1,
      personalId: "123456789012",
      phone: "09876543210",
      email: "email@gmail.com",
      customerType: new CustomerType(2, "Platinum"),
      address: "Viet Nam"
    },
    {
      id: 'KH-0123',
      name: 'Resistor',
      dob: "22/02/2022",
      gender: 2,
      personalId: "123456789012",
      phone: "09876543210",
      email: "email@gmail.com",
      customerType: new CustomerType(3, "Gold"),
      address: "Viet Nam"
    },
    {
      id: 'KH-0555',
      name: 'Tractor',
      dob: "22/02/2022",
      gender: 1,
      personalId: "123456789012",
      phone: "09876543210",
      email: "email@gmail.com",
      customerType: new CustomerType(4, "Silver"),
      address: "Viet Nam"
    },
    {
      id: 'KH-0333',
      name: 'Roller',
      dob: "22/02/2022",
      gender: 2,
      personalId: "123456789012",
      phone: "09876543210",
      email: "email@gmail.com",
      customerType: new CustomerType(5, "Member"),
      address: "Viet Nam"
    },
  ]

  constructor() {
  }

  getCustomerList() {
    console.log(this.customerList);
    return this.customerList;
  }

  createCustomer(customer: Customer) {
    console.log(customer);
    return this.customerList.push(customer);
  }

  findCustomerById(id:string){
    this.customerObj = this.customerList.find(customer => customer.id === id );
    console.log(this.customerObj);
  }
}
