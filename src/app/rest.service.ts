import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

class Entry {
  constructor(public title: string, public description: string, public deadline: string) {}
}

export class RestService {

  connected: boolean;

  constructor() {
    this.connected = false;
  }

  getEntries = () => {
    return [new Entry('Title', 'description', '01.01.1999'),
            new Entry('Homework', 'Englisch', '01.07.2018')];
  }

}
