import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CurrentReservationService} from "../../../services/current-reservation.service";
import {ReservationEntryObject} from "../../../modal/reservation-entry-object";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.scss']
})
export class ReservationInfoComponent implements OnInit {

  constructor(
    private currentReservation: CurrentReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.currentReservation.entry.date = form.value.date;
    this.currentReservation.entry.time = form.value.time;
    this.currentReservation.entry.numberOfGuests = form.value.numberOfGuests;

    console.log(this.currentReservation.entry);
    this.router.navigate(['/make-reservation/optionals']);
  }

  getCurrentReservation(): ReservationEntryObject {
    return this.currentReservation.entry;
  }
}
