import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';
import {MatDialog} from '@angular/material/dialog';
import {DeleteComponent} from '../delete/delete.component';
import Swal from "sweetalert2";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[];
  categoryList: Category[];
  public customer: Customer;



  p: number = 1;
  title = 'Customer';
  searchText: string;

  constructor(private customerService: CustomerService,
              private categoryService: CategoryService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getListCustomer();
  }


//get list
  getListCustomer() {
    this.categoryService.getCategoryList().subscribe(value => {
      this.categoryList = value;
      this.customerService.getCustomerList().subscribe(value => {
        this.customerList = value;
        console.log(this.customerList);
      });
    });
  }

  //delete by dialog
  openDialog(id: any): void {

    const dialogRef = this.dialog.open(DeleteComponent, {

      data: id,
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.ngOnInit();
      this.p =0;
    });
  }

  //Delete by modal
  // callDelete(string: number) {
  //   // console.log(string);
  //   // this.customerService.findCustomerById(string);
  //   // this.customerObj = this.customerService.customerObj;
  //   this.customerService.findCustomerById(string).subscribe(value=>{
  //     this.customer = value
  //     // console.log(this.customer);
  //   });
  //
  // }
  //
  // deleteCustomer(string: number) {
  //   // console.log('vo delete');
  //   this.customerService.deleteCustomer(string).subscribe(()=>{
  //     Swal.fire(
  //       'Delete successfully!!!',
  //       'Check the values in browser console.',
  //       'success'
  //     )
  //     this.ngOnInit();
  //   });
  // }


  //search
  search() {
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // this.customerList.filter = filterValue;
    this.p = 0;
  }
}
