import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  n1= 0;
  n2= 0;
  choice= "";
  result=0;
  constructor() { }

  ngOnInit(): void {
  }
  makeAChoice($event: any): number{

    this.choice = $event.target.value;
    console.log(this.choice)
    switch (this.choice) {
      case "add":
        return this.result =Number(this.n1)+Number(this.n2);
      case "sub":
        return this.result =this.n1-this.n2;
      case"mul":
        return this.result =this.n1*this.n2;
      case "div":
        return this.result =this.n1/this.n2;
      default:
        return 0
    }
  }
}
