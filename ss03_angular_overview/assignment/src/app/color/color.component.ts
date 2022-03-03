import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  gram = 0;
  col ="";

  constructor() { }

  ngOnInit(): void {
  }
  changeColor() : string{
    switch (this.gram) {
      case 1:
        return this.col = "white";
      case 2:
        return this.col = "yellow";
      case 3:
        return this.col = "green";
      case 4:
        return this.col = "blue";
      case 5:
        return this.col = "pink";
      case 6:
        return this.col = "orange";
      case 7:
        return this.col = "red";
      case 8:
        return this.col = "purple";
      case 9:
        return this.col = "gray";
      default:
        return this.col = "black";
    }
  }
}
