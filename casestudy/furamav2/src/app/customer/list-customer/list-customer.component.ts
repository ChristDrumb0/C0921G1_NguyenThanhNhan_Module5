import {Component, Injectable, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../models/customer";
import {CustomerType} from "../../models/customer-type";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
@Injectable()
export class ListCustomerComponent implements OnInit {
  public customer: Customer[] = [];
  title = 'Customer';
  public customerObj: Customer;
  p: number = 1;
  searchText: string;

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customerObj = new class implements Customer {
      address: string;
      customerType: CustomerType;
      dob: string;
      email: string;
      gender: number;
      id: string;
      name: string;
      personalId: string;
      phone: string;

    }
  }

  ngOnInit(): void {
    //getlist = du lieu cung
    // this.customer = this.customerService.getCustomerList();
    // console.log(this.customer);

    //get list API
    this.getList();
  }

  getList() {
    this.customerService.getCustomerList().subscribe(customer => {
      this.customer = customer;
      console.log(this.customer)
    })

  }

  callDelete(string: string) {
    // console.log(string);
    // this.customerService.findCustomerById(string);
    // this.customerObj = this.customerService.customerObj;
    this.customerService.findCustomerById(string).subscribe(customer=>{
      this.customerObj = customer
      // console.log(this.customerObj);
    });

  }

  deleteCustomer(string: string) {
    console.log('vo delete');
    this.customerService.deleteCustomer(string).subscribe(()=>{
      Swal.fire(
        'Delete successfully!!!',
        'Check the values in browser console.',
        'success'
      )
    this.ngOnInit();
    });

  }

  search() {
    this.p=0;

  }
}
