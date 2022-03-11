import {Component, Injectable, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
@Injectable()
export class ListCustomerComponent implements OnInit {
  public customer = new Array();
  title = 'Customer';

  constructor(public customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomerList();

  }

}
