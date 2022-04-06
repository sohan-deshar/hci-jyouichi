import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CurrentReservationService} from "../../../services/current-reservation.service";
import {Router} from "@angular/router";
import {ReservationEntryObject} from "../../../modal/reservation-entry-object";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  formData?: NgForm;

  constructor(private currentReservation: CurrentReservationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm) {
    this.formData = formData;
    this.currentReservation.entry.firstName = formData.value.firstName;
    this.currentReservation.entry.lastName = formData.value.lastName;
    this.currentReservation.entry.email = (formData.value.email);
    this.currentReservation.entry.phone = (formData.value.phone);

    // console.log(this.currentReservation.entry);
    this.router.navigate(['/make-reservation/reservation-info']);
  }

  getCurrentReservationObject(): ReservationEntryObject {
    return this.currentReservation.entry;
  }
}
