import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    const savedTodos = localStorage.getItem('todos');
    if(savedTodos != null) {
      this.todos = JSON.parse(savedTodos);
    }
    else{
    this.todos = [
    {
    title: "one",
    desc: "description one",
    active: false,
    },
    {
    title: "two",
    desc: "description two",
    active: false,
    },
    {
    title: "three",
    desc: "description three",
    active: true,
    }
    ]
   }
  }
  ngOnInit(): void {
  }
  addTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }
  todoCheckBoxToggle(index: number){
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
