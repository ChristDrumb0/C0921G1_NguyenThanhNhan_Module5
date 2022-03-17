import { Component, OnInit } from '@angular/core';
import {Stack} from '../model/stack';
import {Product} from '../model/product';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {StackService} from '../service/stack.service';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-stack',
  templateUrl: './create-stack.component.html',
  styleUrls: ['./create-stack.component.css']
})
export class CreateStackComponent implements OnInit {
  test: string = "yyyy/mm/dd"

  stack: Stack;
  submitted = false;
  productList: Product[] = [];
  stackForm: FormGroup ;
  constructor(private stackService: StackService,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(value => {
      this.productList = value;
      this.stackForm = new FormGroup({

        // id: new FormControl(),
        code: new FormControl('',[Validators.required, Validators.pattern('^LH-\\d{4}$')]),
        product: new FormControl('',[Validators.required,]),
        amount: new FormControl('',[Validators.required,Validators.min(0)]),
        dateIn: new FormControl('',[Validators.required,]),
        madeDate: new FormControl('',[Validators.required,]),
        expired: new FormControl('',[Validators.required,]),

      })
    })
    console.log(this.productList);
  }

  call(){
    const yyyy = this.test.substr(0,4);
    const mm = this.test.substr(5,2);
    const dd = this.test.substr(8,2);

    this.test = dd + '/' + mm + '/' + yyyy;

    console.log(this.test);
  }

  onSubmit() {
    this.submitted = true;
    if (this.stackForm.valid) {
      this.stack = Object.assign({}, this.stackForm.value);
      // console.log(this.stack );
      this.stackService.createStack(this.stack).subscribe( () => {
        Swal.fire(
          'Create successfully!!!',
          'Please check the values in List.',
          'success'
        )
        // console.log(this.stackForm.value );
        this.router.navigateByUrl('')
      });

    }
  }

  // checkDate(abstract: AbstractControl, year2): any{
  //   const year1 = Number(abstract.value.substr(0,4));
  //   Number(year2.substr(0,4));
  //
  //   return year2 < year1 ? null : {checkAge:true};
  //
  // }
}
