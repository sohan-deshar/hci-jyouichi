import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CurrentReservationService} from "../../services/current-reservation.service";
import {ReservationEntryObject} from "../../modal/reservation-entry-object";
import {Router} from "@angular/router";

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {
  formData?: NgForm;

  constructor(
    private currentReservationService: CurrentReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formData = form;
    console.log(form);
  }

  resetCurrentEntry() {
    this.currentReservationService.entry = new ReservationEntryObject();
    this.router.navigate(['/']);
  }
}
