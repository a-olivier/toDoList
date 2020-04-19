import {HomeTodoComponent} from "./app/home/home.component";
import {Routes} from "@angular/router";

export const appRoutes:Routes  = [
  { path: 'home', component: HomeTodoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]
