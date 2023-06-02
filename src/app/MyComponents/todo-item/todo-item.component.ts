import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input()
  todo: Todo = new Todo;
  @Input()
  i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  ngOnInit(): void{
  }
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("Delete has been triggerred")
  }
  oncheckboxClick(todo: any){
    this.todoCheckbox.emit(todo) 

  }

}
