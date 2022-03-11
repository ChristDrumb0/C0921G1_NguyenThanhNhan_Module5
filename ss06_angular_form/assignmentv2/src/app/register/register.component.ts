import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Student} from "./student";
import {ValidateUtil} from "./validate-util";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentForm: FormGroup;
  submitted = false;

  studentObj: Student;
  validateUtil= new ValidateUtil();


  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      passwordGroup : new FormGroup({
        password: new FormControl('', [Validators.minLength(6),Validators.required]),
        confirmPassword: new FormControl()
      }, this.comparePassword),

      country: new FormControl(),
      age: new FormControl('', this.validateUtil.checkAge18),
      gender: new FormControl(),
      phone: new FormControl('',
        [Validators.compose([Validators.pattern('^\\+84\\d{9,10}$'),Validators.required])]),
    });
    // Validators.pattern('^\\+84\\d{9,10}$'),Validators.required

  }

  getInfoRegister(): void {
    this.studentObj = Object.assign({}, this.studentForm.value);
    console.log(this.studentObj);
  }

  comparePassword(compare : AbstractControl): any{
      const validate = compare.value;
      return (validate.password === validate.confirmPassword)? null : {notMatch: true};
  }
  onSubmit() {
    this.submitted = true;
    if (this.studentForm.valid) {
      // this.toastr.success('Form Submitted successfully!!!\n Check the values in browser console.');
      alert('Form Submitted successfully!!!\n Check the values in browser console.');
      console.table(this.studentForm.value);
    }
  }
}
