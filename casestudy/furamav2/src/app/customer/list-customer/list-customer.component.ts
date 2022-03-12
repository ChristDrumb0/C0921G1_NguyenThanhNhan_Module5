import {Component, Injectable, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
@Injectable()
export class ListCustomerComponent implements OnInit {
  public customer : Customer[];
  title = 'Customer';

  constructor(public customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomerList();
    console.log(this.customer);
  }

  callDelete(string: string){
    this.customerService.findCustomerById(string);
  }

}
