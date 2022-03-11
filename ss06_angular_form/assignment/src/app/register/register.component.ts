import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Student} from "./student";
import {ValidateUtil} from "./validate-util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  studentForm: FormGroup;
  // @ts-ignore
  studentObj: Student
  // validateUtil: new ValidateUtil();

  constructor() {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl(),
      country: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      phone: new FormControl(),
    })


  }

  getInfoRegister(): void {
    this.studentObj = Object.assign({}, this.studentForm.value);
    console.log(this.studentObj);
  }
}
