import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBoxToggle: EventEmitter<number> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
  }
  onCheckBoxClick(index: number){
    this.todoCheckBoxToggle.emit(index);
  }

}
