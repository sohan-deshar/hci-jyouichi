import {Component, Inject, OnInit} from '@angular/core';
import {CurrentReservationService} from "../../../services/current-reservation.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ReservationDataService} from "../../../services/reservation-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-overview',
  templateUrl: './reservation-overview.component.html',
  styleUrls: ['./reservation-overview.component.scss']
})
export class ReservationOverviewComponent implements OnInit {

  constructor(
    private reservationDataService: ReservationDataService,
    public currentReservation: CurrentReservationService,
    private dialogRef: MatDialogRef<ReservationOverviewComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  createReservation() {
    this.reservationDataService.addReservationEntry(this.currentReservation.entry);
    this.dialogRef.close();
    this.router.navigate(['/successful-reservation']);
  }
}
