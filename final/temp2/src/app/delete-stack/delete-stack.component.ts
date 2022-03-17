import {Component, Inject, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {StackService} from '../service/stack.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Stack} from '../model/stack';


@Component({
  selector: 'app-delete-stack',
  templateUrl: './delete-stack.component.html',
  styleUrls: ['./delete-stack.component.css']
})
export class DeleteStackComponent implements OnInit {

  stack: Stack
  constructor(private stackService: StackService,
              public dialogRef: MatDialogRef<DeleteStackComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,) {
  }

  ngOnInit(): void {
    this.stackService.findStackById(this.data).subscribe(value => {
      this.stack = value;
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(id: number): void{
    this.stackService.deleteStack(id).subscribe(() => {
      Swal.fire(
        'Delete successfully!!!',
        'Please check the values in List.',
        'success'
      )
    });
    this.dialogRef.close();
  }

}
