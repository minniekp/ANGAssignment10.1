import { Injectable } from '@angular/core';
import { ITodoList } from './interface/interface1';
import { ITodoType } from './interface/interface2';

@Injectable()
export class TodoService {

  todosList: ITodoList[] = [];

  /** Add cricketer in the array List. */
  addTodo(todoDetail: ITodoList) {
    this.todosList.unshift(todoDetail);
  }

  /**Get the cricket list from the array. */
  getTodo(): ITodoList[] {
    return this.todosList;
  }


}

