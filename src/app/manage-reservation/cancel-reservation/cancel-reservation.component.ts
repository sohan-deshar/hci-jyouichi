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
    this.reservationDataService.removeReservationEntry(form_ref.value.token, form_ref.value.email)
      .subscribe({
        next: data => {
          console.log(data);
          this._snackBar
            .open(
              `Reservation for ${data.lastName + " " + data.firstName} on ${data.date} at ${data.time} cancelled successfully`,
              "", {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['snackbar-success'],
              }
              );
        },
        error: error => {
          console.log(error);
          this._snackBar
            .open(
              `Reservation not found`,
              "", {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['snackbar-error'],
              });
        }
      })
    form_ref.reset();

  }
}
