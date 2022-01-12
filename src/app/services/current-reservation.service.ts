import { Injectable } from '@angular/core';
import {ReseravtionEntryObject} from "../modal/reseravtion-entry-object";

@Injectable({
  providedIn: 'root'
})
export class CurrentReservationService {
  entry: ReseravtionEntryObject;

  constructor() {
    this.entry = new ReseravtionEntryObject();
  }

}
