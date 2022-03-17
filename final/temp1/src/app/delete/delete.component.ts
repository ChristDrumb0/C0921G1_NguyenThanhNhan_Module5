import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../model/customer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from "sweetalert2";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  customer: Customer
  constructor(private customerService: CustomerService,
              public dialogRef: MatDialogRef<DeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,) {
  }

  ngOnInit(): void {
    this.customerService.findCustomerById(this.data).subscribe(value => {
      this.customer = value;
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(id: number): void{
    this.customerService.deleteCustomer(id).subscribe(() => {
      Swal.fire(
        'Delete successfully!!!',
        'Please check the values in List.',
        'success'
      )
    });
    this.dialogRef.close();
  }
}
