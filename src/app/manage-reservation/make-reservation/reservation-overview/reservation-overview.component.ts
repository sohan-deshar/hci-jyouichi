import {Component, Inject, Injector, OnInit} from '@angular/core';
import {CurrentReservationService} from "../../../services/current-reservation.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ReservationDataService} from "../../../services/reservation-data.service";
import {Router} from "@angular/router";
import {MenuService} from "../../../services/menu.service";

@Component({
  selector: 'app-reservation-overview',
  templateUrl: './reservation-overview.component.html',
  styleUrls: ['./reservation-overview.component.scss']
})
export class ReservationOverviewComponent implements OnInit {
  public reservationDataService: ReservationDataService;
  public currentReservation: CurrentReservationService;
  public menuService: MenuService;

  constructor(
    private dialogRef: MatDialogRef<ReservationOverviewComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: {injector: Injector}
  ) {
    this.reservationDataService = this.data.injector.get(ReservationDataService);
    this.currentReservation = this.data.injector.get(CurrentReservationService);
    this.menuService = this.data.injector.get(MenuService);

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
