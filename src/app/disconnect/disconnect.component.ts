import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {RestService} from '../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {

  constructor(private cookieService: CookieService, private restService: RestService, private router: Router) { }

  ngOnInit() {
    this.cookieService.deleteAll('phoneID');
    this.restService.connected = false;
    this.router.navigate(['/connect']);
  }

}
