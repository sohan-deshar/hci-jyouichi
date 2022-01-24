import { Injectable } from '@angular/core';
import {ReservationEntryObject} from "../modal/reservation-entry-object";
import {MenuItem} from "../modal/menu-item";
import {MenuService} from "./menu.service";

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

}
