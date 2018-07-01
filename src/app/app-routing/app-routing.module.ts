import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectComponent} from '../connect/connect.component';
import {TodoComponent} from '../todo/todo.component';
import {DisconnectComponent} from '../disconnect/disconnect.component';

const routes: Routes = [
  {path: 'connect', component: ConnectComponent},
  {path: '', component: TodoComponent},
  {path: 'disconnect', component: DisconnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
