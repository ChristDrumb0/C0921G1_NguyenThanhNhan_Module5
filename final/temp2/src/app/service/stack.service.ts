import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stack} from '../model/stack';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  private API_URL = 'http://localhost:8080/v1/stack';
  private stackList: Stack[];

  constructor(private http: HttpClient) {
  }

  getStackList(): Observable<Stack[]> {
    return this.http.get<Stack[]>(this.API_URL);
  }

  createStack(stack: Stack): Observable<void> {
     this.getStackList().subscribe(value => {
       this.stackList = value;
       stack.id = (this.stackList.length+1);
    })

    return this.http.post<void>(this.API_URL, stack)
  }

  findStackById(id: number): Observable<Stack>{
    return this.http.get<Stack>(this.API_URL +'/' +id);
  }

  updateStack(id: number, stack: Stack): Observable<void> {
    return this.http.patch<void>(this.API_URL  +'/'+ id, stack);
  }

  deleteStack(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL +'/'+ id);
  }
}
