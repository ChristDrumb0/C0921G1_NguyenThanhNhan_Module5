import {AbstractControl} from "@angular/forms";

export class ValidateUtil {
  checkAge(abstract: AbstractControl): any{
    const year = Number(abstract.value.substr(0,4));
    const curYear = new Date().getFullYear();

    return curYear - year <100? null : {checkAge:true};

  }
}
