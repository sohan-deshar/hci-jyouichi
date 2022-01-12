import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {
  formData?: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formData = form;
    console.log(form);
  }
}
