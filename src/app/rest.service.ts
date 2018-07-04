import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Entry} from './interfaces/Entry';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})

export class RestService {

  connected: boolean;
  phoneID: String;

  entries: Entry[] = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.connected = false;
  }

  pullEntries = () => {
    if (this.phoneID === undefined) {this.phoneID = this.cookieService.get('phoneID'); }
    console.log(environment.restUrl + '/getEntries/' + this.phoneID);
    this.http.get(environment.restUrl + '/getEntries/' + this.phoneID).subscribe(result => {
      this.entries = <Entry[]>result;
    });
  }

  saveEntry = (titleArg: String, descriptionArg: String, deadlineArg: String) => {
    if (this.phoneID === undefined) {this.phoneID = this.cookieService.get('phoneID'); }

    this.http.post(environment.restUrl + '/createEntry',
      {deviceID: this.phoneID, title: titleArg, description: descriptionArg, deadline: deadlineArg}).subscribe(result => {
        console.log(result);
    });
    this.entries.push(<Entry>{deviceID: this.phoneID, title: titleArg, description: descriptionArg, deadline: deadlineArg});
  }

  getInformation = (title: String, consumer) => {
    if (this.phoneID === undefined) {this.phoneID = this.cookieService.get('phoneID'); }
    this.http.get(environment.restUrl + '/getInformation/' + this.phoneID + '/' + title).subscribe(result => {
      consumer(result);
    });
  }

  updateEntry = (oldTitleArg: String, newTitleArg: String, descriptionArg: String, deadlineArg: String) => {
    if (this.phoneID === undefined) {this.phoneID = this.cookieService.get('phoneID'); }
    this.http.post(environment.restUrl + '/updateEntry/' + this.phoneID + '/' + oldTitleArg,
      {deviceID: this.phoneID, title: newTitleArg, description: descriptionArg, deadline: deadlineArg}).subscribe(result => {});

    for (const entry of this.entries) {
      if (entry.title === oldTitleArg) {
        entry.title = newTitleArg;
        entry.description = descriptionArg;
        entry.deadline = deadlineArg;
      }
    }
  }

  deleteEntry = (title: String) => {
    if (this.phoneID === undefined) {this.phoneID = this.cookieService.get('phoneID'); }
    this.http.post(environment.restUrl + '/deleteEntry/' + this.phoneID + '/' + title, {}).subscribe(result => {});

    for (const entry of this.entries) {
      if (entry.title === title) {
        this.entries.splice(this.entries.indexOf(entry), 1);
      }
    }
  }

  getEntries = () => {
    return this.entries;
  }

}
