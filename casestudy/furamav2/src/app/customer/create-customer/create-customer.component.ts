import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../models/customer";
import {CustomerType} from "../../models/customer-type";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  submitted = false;
  customerObj: Customer;
  // validateUtil= new ValidateUtil();

  constructor(private router:Router,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      personalId: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      customerType: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      check: new FormControl('',[Validators.required]),
    })
  }
  getInfoRegister(): void{
    this.customerObj = Object.assign({}, this.customerForm.value);
    console.log(this.customerObj );
    this.customerService.createCustomer(this.customerObj);
    console.log(this.customerService.getCustomerList())
  }
  onSubmit() {
    this.submitted = true;
    if (this.customerForm.valid) {
      // this.toastr.success('Form Submitted successfully!!!\n Check the values in browser console.');
      alert('Form Submitted successfully!!!\n Check the values in browser console.');
      console.log(this.customerForm.value );
      console.log("2");
      this.router.navigateByUrl('customer')
    }
  }
}
