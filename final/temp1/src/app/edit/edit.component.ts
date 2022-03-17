import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../model/category';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  submitted = false;
  customerForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,]),
    phone: new FormControl('', [Validators.required,]),
    address: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });
  customer: Customer;
  categoryList: Category[]=[]
  constructor(private customerService: CustomerService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe(value => {
      this.categoryList = value;
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
            'Updated successfully!!!',
            'Please check the values in List.',
            'success'
          )
          // console.log(this.customerForm.value );
          this.router.navigateByUrl('')
        }
      );
    }
  }
}
