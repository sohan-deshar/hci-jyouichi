import { Injectable } from '@angular/core';
import {ReservationEntryObject} from "../modal/reservation-entry-object";
import {MenuService} from "./menu.service";
import {Subject} from "rxjs";
import {ReservationEntry} from "../modal/reservation-entry";

@Injectable({
  providedIn: 'root'
})
export class CurrentReservationService {
  entry: ReservationEntryObject;
  preOrderDetails: {
    title: string,
    quantity: number,
    price: number
  }[] = [];
  orderTotal: number = 0;
  reservationCreated$: Subject<ReservationEntry> = new Subject<ReservationEntry>();
  //
  // private _personalInfoFilled: boolean = false;
  // private _reservationInfoFilled: boolean = false;
  //
  // checkStatus(): void{
  //   this.checkAndEvaluateIfPersonalInfoFilled();
  //   this.checkAndEvaluateIfReservationInfoFilled();
  // }
  //
  // checkAndEvaluateIfPersonalInfoFilled(): boolean{
  //   if(
  //     this.entry.firstName.length != 0 &&
  //     this.entry.lastName.length != 0 &&
  //     this.entry.email.length != 0
  //   ){
  //     this._personalInfoFilled = true;
  //     return true;
  //   }
  //   this._personalInfoFilled = false;
  //   return false;
  // }
  //
  // checkAndEvaluateIfReservationInfoFilled(): boolean {
  //   if(
  //     this.entry.date != null &&
  //     this.entry.time != null &&
  //     this.entry.numberOfGuests != null
  //   ){
  //     this._reservationInfoFilled = true;
  //     return true;
  //   }
  //   this._reservationInfoFilled = false;
  //   return false;
  //
  // }

  constructor(private menuService: MenuService) {
    this.entry = new ReservationEntryObject();
  }


  calculatePreorderDetails(){
    this.preOrderDetails = this.entry.preOrders.map(order => {
        let menuItem = this.menuService.getMenuByMenuId(order.menuId);
        return {
          title: menuItem.name,
          quantity: order.quantity,
          price: menuItem.price
        }
      });
    this.orderTotal = +this.preOrderDetails.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
  }


  // get personalInfoFilled(): boolean {
  //   return this._personalInfoFilled;
  // }
  //
  // get reservationInfoFilled(): boolean {
  //   return this._reservationInfoFilled;
  // }
}
