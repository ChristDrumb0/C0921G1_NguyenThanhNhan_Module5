import {Component, OnInit} from '@angular/core';
import {Todo} from "./todo";
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  inputForm = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    const observer = {
      value: (data) => {
      },
      error: (error) => {
      },
      complete: () => {
      }
    }
    this.todoService.getTodoList().subscribe(next => {
      this.todoList = next;
      console.log(this.todoList.length);
    }, error => {
      console.log(error);
    })

  }

  toggleTodo(i) {
    const todo = this.todoList[i];
    const todoUpdate = ({
      ...todo, complete: !todo.complete
    });
    // this.todoList[i].complete = !this.todoList[i].complete;
    this.todoService.updateTodo(todoUpdate).subscribe(next => {
      this.todoList[i].complete = next.complete
    })
  }

  addTodo() {
    const todo: Partial<Todo> = {
      id: this.todoList[this.todoList.length - 1].id + 1,
      title: this.inputForm.value,
      complete: false,
    };
    console.log(todo.id);
    this.todoService.createTodo(todo).subscribe(() => {
        this.inputForm.setValue('');
        this.ngOnInit();
      }
    )

  }

  deleteTodo(i) {
    const todo = this.todoList[i];
    this.todoService.deleteTodo(todo.id).subscribe(next => {
        this.todoList = this.todoList.filter(t => t.id !== todo.id)
      }
    )
  }

}
