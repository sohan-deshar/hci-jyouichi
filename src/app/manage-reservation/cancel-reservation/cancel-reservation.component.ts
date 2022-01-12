import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss']
})
export class CancelReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form_ref: NgForm) {

  }
}
