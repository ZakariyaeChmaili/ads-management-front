import {Component, inject, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-partner-form-dialog',
  templateUrl: './partner-form-dialog.component.html',
  styleUrl: './partner-form-dialog.component.scss'
})
export class PartnerFormDialogComponent {
  activeModal = inject(NgbActiveModal);

  // @Input() name: string;
  savePartner() {

  }
}
