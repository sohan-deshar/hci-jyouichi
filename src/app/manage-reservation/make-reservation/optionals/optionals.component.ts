import {Component, Injector, OnInit, ViewContainerRef} from '@angular/core';
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
  seat?: string[];
  preOrder?: Order[];

  constructor(
    private dialog: MatDialog,
    private currentReservation: CurrentReservationService,
    private router: Router,
    private injector: Injector
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.currentReservation.entry.specialRequests = form.value.specialRequests;
    this.currentReservation.entry.preOrders = this.preOrder!;

    this.openOverViewDialog();

    console.log(this.currentReservation.entry);
  }

  openMenuDialog() {
    let config = new MatDialogConfig();
    config.width = '1100px';
    config.height = '1100px';
    config.disableClose = true;
    config.position = {
      top: '50px'
    };
    config.data = {injector: this.injector};
    const dialogRef = this.dialog.open(MenuComponent, config);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   for(let item of result) {
    //     this.currentReservation.entry.seat.push(item);
    //   }
    //   console.log(this.currentReservation);
    // });
  }

  openSeatingDialog(){
    let config = new MatDialogConfig();
    config.width = '1100px';
    config.height = '1100px';
    config.disableClose = true;
    config.position = {
      top: '50px'
    };
    config.data = {injector: this.injector};
    const dialogRef = this.dialog.open(SeatingComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      // for(let item of result) {
      //   this.currentReservation.entry.seat.push(item);
      // }
      // console.log(this.currentReservation);
      console.log(this.currentReservation)
    });
  }

  private openOverViewDialog() {
    const dialogRef = this.dialog.open(ReservationOverviewComponent, standardDialogConfig);
  }

  goBack() {
    this.router.navigate(['/make-reservation/reservation-info']);
  }
}
