import {AbstractControl} from "@angular/forms";

export class ValidateUtil {
  checkAge18(abstract: AbstractControl): any{
    const year = Number(abstract.value.substr(0,4));
    // console.log(abstract.value);
    const curYear = new Date().getFullYear();

    return curYear - year >= 18?null : {not18: true};
  }

}
