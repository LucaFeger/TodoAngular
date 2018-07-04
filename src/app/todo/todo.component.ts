import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  dateValue: any;
  dateString: String;

  oldTitle: String;
  title: String;
  description: String;

  selectedTitleToDelete: String;

  uri: String;

  constructor(private restService: RestService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.restService.pullEntries();
  }

  openEditModal(content: any, titleArg: String) {
    this.restService.getInformation(titleArg, (result: any) => {
      this.oldTitle = titleArg;
      this.title = titleArg;
      this.description = result.description;

      const dateArray = result.deadline.split('.');

      this.dateValue = {year: +dateArray[2], month: +dateArray[1], day: +dateArray[0]};
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
    });
  }

  openDeleteModal(content: any, titleArg: String) {
    this.selectedTitleToDelete = titleArg;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  openQrModal(content: any, titleArg: String) {
    this.restService.getInformation(titleArg, (result) => {
      this.uri = 'https://api.qrserver.com/v1/create-qr-code/?data=';
      this.uri += JSON.stringify({title: result.title, description: result.description, deadline: result.deadline});
      this.uri += '&size=220x275&margin=0';

      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'sm'});
    });
  }

  deleteEntry() {
    this.restService.deleteEntry(this.selectedTitleToDelete);
  }

  saveEditModal() {
    this.dateString = '';

    this.dateString += this.dateValue.day;
    this.dateString += '.';

    this.dateString += this.dateValue.month;
    this.dateString += '.';

    this.dateString += this.dateValue.year;

    this.restService.updateEntry(this.oldTitle, this.title, this.description, this.dateString);
  }

  getRestService = () => {
    return this.restService;
  }

}
