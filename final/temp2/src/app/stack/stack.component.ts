import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {Stack} from '../model/stack';
import {MatDialog} from '@angular/material/dialog';
import {StackService} from '../service/stack.service';
import {ProductService} from '../service/product.service';
import {DeleteStackComponent} from '../delete-stack/delete-stack.component';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  stackList: Stack[];
  productList: Product[];
  public stack: Stack;

  p: number = 1;
  title = 'Product Stack';
  searchText: string;

  constructor(public dialog: MatDialog,
              public stackService: StackService,
              public productService: ProductService) { };


  ngOnInit(): void {
    this.getListStack();
  }

  //get list
  getListStack() {
    this.productService.getProductList().subscribe(value => {
      this.productList = value;
      this.stackService.getStackList().subscribe(value => {
        this.stackList = value;
        console.log(this.stackList);
      });
    });
  }

  //delete by dialog
  openDialog(id: any): void {

    const dialogRef = this.dialog.open(DeleteStackComponent, {

      data: id,
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.ngOnInit();
      this.p =0;
    });
  }


  //search
  search() {

    this.p = 0;
  }
}
