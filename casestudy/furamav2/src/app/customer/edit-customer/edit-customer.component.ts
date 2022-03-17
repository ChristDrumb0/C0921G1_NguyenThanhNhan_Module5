import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../models/customer";
import {CustomerType} from "../../models/customer-type";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  submitted = false;
  customerForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    personalId: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required,]),
    // customerType: new FormControl(this.customer.customerType['type'],[Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    check: new FormControl('', [Validators.required])
  });
  customer: Customer;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getCustomerType().subscribe(custype => {
      this.customerType = custype;
      const id = this.activatedRoute.snapshot.params.id;
      this.customerService.findCustomerById(id).subscribe(
        value => {
          this.customer = value;
          this.customerForm.setValue(this.customer);
        }
      );
    });
  }


  editCustomer() {
    if (this.customerForm.valid) {

      this.submitted = true;

      const customerUpdated = this.customerForm.value;
      const id = this.activatedRoute.snapshot.params.id;
      this.customerService.updateCustomer(id, customerUpdated).subscribe(() => {
          Swal.fire(
            'Form Submitted successfully!!!',
            'Check the values in browser console.',
            'success'
          )
          // console.log(this.customerForm.value );
          this.router.navigateByUrl('customer')
        }
      );
    }
  }
}
