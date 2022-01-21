import { Injectable } from '@angular/core';
import {ReservationEntryObject} from "../modal/reservation-entry-object";

@Injectable({
  providedIn: 'root'
})
export class CurrentReservationService {
  entry: ReservationEntryObject;

  constructor() {
    this.entry = new ReservationEntryObject();
  }

}
