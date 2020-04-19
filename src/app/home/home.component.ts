import {Component} from "@angular/core";

@Component({
  template: `
    <h1> HOME </h1>
    <div class="container">
      <div class="row justify-content-end">
        <div (click)="displayAddElement()" class="col-2">Add a Task</div>
      </div>
      <div class="row" *ngIf="displayAdd">
        <input #textBox type="text" [(ngModel)]="newTask" class="col-2">
        <div class="col-2" (click)="addElement()"> add </div>
      </div>
      <table class="table table-striped table-bordered ">
        <thead>
        <tr>
          <th scope="col">Task</th>
        </tr>
        </thead>
        <tbody *ngFor="let task of listOfTasks ; let i = index ">
        <tr>
          <th scope="row" (click)="deleteTask(i)" >{{task}}</th>
        </tr>
        </tbody>
      </table>
    </div>
  `
})

export class HomeTodoComponent {

  listOfTasks = [
    "Laundry", "HomeWork", "Walk the dog"
  ]
  private displayAdd: boolean = false;
  newTask: string;

  addElement() {
    this.listOfTasks.push(this.newTask)
    this.displayAdd = false
  }

  deleteTask(toDelete: number) {
    this.listOfTasks.splice(toDelete, 1)
  }

  displayAddElement() {
    this.newTask = undefined
    this.displayAdd = true
  }
}
