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
  @Output() todoDelete: EventEmitter<number> = new EventEmitter();
  @Output() todoCheckBoxToggle: EventEmitter<number> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  
  }
  onClick(index: number){
    this.todoDelete.emit(index);
  }
  onCheckBoxClick(index: number){
    this.todoCheckBoxToggle.emit(index);
  }

}
