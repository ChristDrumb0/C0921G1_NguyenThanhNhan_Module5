import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;


  constructor() {
  }

  ngOnInit(): void {
    this.loginForm =new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
        password: new FormControl('', [Validators.minLength(6),Validators.required]),
    });
  }

  login(): void {
    console.log(this.loginForm.value);
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.loginForm.value);
    }
  }
}
