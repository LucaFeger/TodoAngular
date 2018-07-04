import {Component} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-modal-create',
  templateUrl: 'modal-create.component.html',
  styleUrls: ['../todo/todo.component.css']
})

export class ModalCreateComponent {

  dateValue: any;
  dateString: String;

  constructor(private modalService: NgbModal, private restService: RestService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  save(title: String, description: String) {
    this.dateString = '';

    this.dateString += this.dateValue.day;
    this.dateString += '.';

    this.dateString += this.dateValue.month;
    this.dateString += '.';

    this.dateString += this.dateValue.year;

    this.restService.saveEntry(title, description, this.dateString);
  }

}
