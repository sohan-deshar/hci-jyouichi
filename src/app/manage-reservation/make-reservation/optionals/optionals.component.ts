import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MenuComponent} from "./menu/menu.component";
import {SeatingComponent} from "./seating/seating.component";
import {CurrentReservationService} from "../../../services/current-reservation.service";
import {Router} from "@angular/router";
import {Order} from "../../../modal/order";
import {ReservationOverviewComponent} from "../reservation-overview/reservation-overview.component";

export const standardDialogConfig ={
  width: '1100px',
  disableClose: true,
  position: {
    top: '50px'
  }
};

@Component({
  selector: 'app-optionals',
  templateUrl: './optionals.component.html',
  styleUrls: ['./optionals.component.scss']
})
export class OptionalsComponent implements OnInit {
  seat?: string;
  preOrder?: Order[];

  constructor(
    private dialog: MatDialog,
    private currentReservation: CurrentReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.currentReservation.entry.specialRequests = form.value.specialRequests;
    this.currentReservation.entry.seat = this.seat!;
    this.currentReservation.entry.preOrders = this.preOrder!;

    this.openOverViewDialog();

    console.log(this.currentReservation.entry);
  }

  openMenuDialog() {
    const dialogRef = this.dialog.open(MenuComponent, standardDialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result from the parent component: ${result?.username}`);
    });
  }

  openSeatingDialog(){
    const dialogRef = this.dialog.open(SeatingComponent, standardDialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result from the parent component: ${result}`);
      this.seat = result;
    });

  }

  private openOverViewDialog() {
    const dialogRef = this.dialog.open(ReservationOverviewComponent, standardDialogConfig);
  }
}
