import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../models/customer";
import {CustomerType} from "../../models/customer-type";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {CustomerTypeService} from "../../service/customer-type.service";
import {Observable} from "rxjs";
import {ValidateUtil} from "../../service/validate-util";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  submitted = false;
  customerObj: Customer;
  customerType: CustomerType[];

  validateUtil= new ValidateUtil();

  constructor(private router:Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {

  }

  ngOnInit(): void {
    this.customerTypeService.getCustomerType().subscribe(value => this.customerType = value);
    // console.log(this.customerType);
    this.customerForm = new FormGroup({
      id: new FormControl('',[Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required,this.validateUtil.checkAge]),
      gender: new FormControl('',[Validators.required]),
      personalId: new FormControl('',[Validators.required,Validators.pattern('^(\\d{9}|\\d{12})$')]),
      // phone: new FormControl('',[Validators.required,Validators.pattern('\\+84\\d{9}')]),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\+\d{9}$/gmu)])),
      email: new FormControl('',[Validators.required, Validators.email]),
      customerType: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      check: new FormControl('',[Validators.required]),
    })
  }

  getInfoRegister(): void{

    // console.log(this.customerService.getCustomerList())
  }
  onSubmit() {
    this.submitted = true;
    if (this.customerForm.valid) {
      this.customerObj = Object.assign({}, this.customerForm.value);
      // console.log(this.customerObj );
      this.customerService.createCustomer(this.customerObj).subscribe( () => {
        Swal.fire(
          'Form Submitted successfully!!!',
          'Check the values in browser console.',
          'success'
        )
        // console.log(this.customerForm.value );
        this.router.navigateByUrl('customer')
      });

    }
  }
}
