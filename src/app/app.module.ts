import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { TodoDropdownService } from './todo-dropdown.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TodoDropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
