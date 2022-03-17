import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {

  }

  getCategoryList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }
}
