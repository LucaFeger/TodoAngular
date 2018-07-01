import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private restService: RestService, private router: Router, private cookieService: CookieService) {}

  ngOnInit() {
  }

  validatePhoneID(phoneID: any) {
    // validate phoneID through rest
    this.restService.connected = true;
    this.cookieService.set('phoneID', phoneID);
  }

  getRestService(): RestService {
    return this.restService;
  }

}
