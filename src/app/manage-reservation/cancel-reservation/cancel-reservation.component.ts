import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ReservationDataService} from "../../services/reservation-data.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss']
})
export class CancelReservationComponent implements OnInit {

  constructor(
    private reservationDataService: ReservationDataService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form_ref: NgForm) {
    console.log(form_ref.value);
    let result = this.reservationDataService.removeReservationEntry(form_ref.value.token);
    console.log(result);
    if(result != null){
      this._snackBar
        .open(
          `Reservation for ${result.lastName + " " + result.firstName} on ${result.date} at ${result.time} cancelled successfully`,
          "", {
          duration: 5000,
          verticalPosition: 'top',
            panelClass: ['snackbar-success'],
        });
    } else {
      this._snackBar
        .open(
          `Reservation not found`,
          "", {
          duration: 5000,
          verticalPosition: 'top',
            panelClass: ['snackbar-error'],
        });
    }
    form_ref.reset();

  }
}
