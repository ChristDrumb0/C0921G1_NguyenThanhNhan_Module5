import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = 'http://localhost:3000/todo';
  // private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.API_URL).pipe(map(data => data));
  }
  // getTodoList(count= 1000): Observable<Todo[]>{
  //   return this.http.get<Todo[]>(this.API_URL).pipe(map(data => data.filter((t,i)=> i<count)))
  // }

  updateTodo(todo: Todo): Observable<Todo>{
    return this.http.patch<Todo>(`${this.API_URL}/${todo.id}`, todo);
  }
  deleteTodo(id:number):Observable<Todo>{
    return this.http.delete<Todo>(`${this.API_URL}/${id}`);
  }
  createTodo(todo: Partial<Todo>): Observable<Todo>{

    return this.http.post<Todo>(this.API_URL, todo);
  }
}
