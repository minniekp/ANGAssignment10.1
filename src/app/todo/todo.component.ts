import { Component, OnInit, Input} from '@angular/core';
import { ITodoList } from '../interface/interface1';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoDetail;

  todoList: ITodoList;

  constructor() { }

  ngOnInit() {
  }

}
