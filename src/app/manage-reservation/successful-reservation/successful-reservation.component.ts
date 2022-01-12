import { Component, OnInit } from '@angular/core';
import {CurrentReservationService} from "../../services/current-reservation.service";
import {ReseravtionEntryObject} from "../../modal/reseravtion-entry-object";
import {Router} from "@angular/router";

@Component({
  selector: 'app-successful-reservation',
  templateUrl: './successful-reservation.component.html',
  styleUrls: ['./successful-reservation.component.scss']
})
export class SuccessfulReservationComponent implements OnInit {

  constructor(
    public currentReservation: CurrentReservationService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.currentReservation.entry = new ReseravtionEntryObject();
    this.router.navigate(['/']);
  }
}
