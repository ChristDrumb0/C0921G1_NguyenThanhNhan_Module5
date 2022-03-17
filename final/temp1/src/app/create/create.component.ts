import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {CategoryService} from '../service/category.service';
import {Router} from '@angular/router';
import {Customer} from '../model/customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  customer: Customer;
  submitted = false;
  categoryList: Category[] = [];
  customerForm: FormGroup ;
  constructor(private customerService: CustomerService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe(value => {
      this.categoryList = value;
      this.customerForm = new FormGroup({
        id: new FormControl('',[Validators.required,]),
        name: new FormControl('',[Validators.required,]),
        dob: new FormControl('',[Validators.required,]),
        gender: new FormControl('',[Validators.required,]),
        email: new FormControl('',[Validators.required,]),
        phone: new FormControl('',[Validators.required,]),
        address: new FormControl('',[Validators.required,]),
        category: new FormControl('',[Validators.required,]),
      })
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerForm.valid) {
      this.customer = Object.assign({}, this.customerForm.value);
      // console.log(this.customer );
      this.customerService.createCustomer(this.customer).subscribe( () => {
        Swal.fire(
          'Create successfully!!!',
          'Please check the values in List.',
          'success'
        )
        // console.log(this.customerForm.value );
        this.router.navigateByUrl('')
      });

    }
  }
}
