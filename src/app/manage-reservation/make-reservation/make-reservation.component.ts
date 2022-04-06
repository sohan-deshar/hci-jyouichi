import { Component, OnInit } from '@angular/core';
import {CurrentReservationService} from "../../services/current-reservation.service";
import {ReservationEntryObject} from "../../modal/reservation-entry-object";
import {Router} from "@angular/router";

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {
  get currentReservationService(): CurrentReservationService {
    return this._currentReservationService;
  }

  constructor(
    private _currentReservationService: CurrentReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  resetCurrentEntry() {
    this._currentReservationService.entry = new ReservationEntryObject();
    this.router.navigate(['/']);
  }
}
