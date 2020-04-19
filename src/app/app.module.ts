import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import {HomeTodoComponent} from "./home/home.component";
import {TodoHeaderComponent} from "./home/navigation/todo-header.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TodoComponent,
    HomeTodoComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
