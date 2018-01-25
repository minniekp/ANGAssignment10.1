import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import { TodoDropdownService } from './todo-dropdown.service';

import { ITodoList, ITodoModel } from './interface/interface1';
import { ITodoType } from './interface/interface2';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [TodoService]
})

export class AppComponent implements OnInit {

  todosArray: ITodoList[] = [];
  todoType: ITodoType[] = [];

  todoModel: ITodoModel;
  todoDetail: ITodoList;


  /**Declaring myForm of Type FormGroup */
  myForm: FormGroup;

  /**explicitly declaring lastName */
  lastName = new FormControl('', [Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(2)]);


  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _todoService: TodoService, private _todoDropDown: TodoDropdownService, private fb: FormBuilder) { }

  ngOnInit() {

    /**
     * Using Form Group
     * Creating Instance of FromGroup and passing object
     * with key value pair for the form. */
    // this.myForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName : this.lastName
    // });

    /**Using FormBuilder*/
    this.myForm = this.fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'lastName': this.lastName,
      'email' : 'abc@gmail.com',
      'todoType': [, Validators.required]
    });

    
    this.todoType = this._todoDropDown.getTodoType();
  }

  /**Reset a form */
  

  /**Add a cricket */
  addCriketer(values) {

    this.todoDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      todoType: values.todoType
    };
    // /**Call function from service. */
    this._todoService.addTodo(this.todoDetail);
    // Using 3rd party library to show message.
    alertify.notify('Todo Added Successfully', 'success', 3);

    this.todosArray = this._todoService.getTodo();
  }

}

}
