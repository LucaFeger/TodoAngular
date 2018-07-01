import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  internalRestService: RestService;

  constructor(private restService: RestService) {
    this.internalRestService = restService;
  }

  ngOnInit(): void {}

  getRestService = () => {
    return this.internalRestService;
  }

}
