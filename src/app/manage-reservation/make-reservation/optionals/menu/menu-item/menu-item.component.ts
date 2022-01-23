import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from "../../../../../modal/menu-item";
import {CurrentReservationService} from "../../../../../services/current-reservation.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit, OnDestroy {
  @Input()data!: MenuItem;
  @Input()quantity: number = 0;

  constructor(private currentReservation: CurrentReservationService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if(this.quantity > 0) {
      this.currentReservation.entry.addOrderItem({
        menuId: this.data.menuId,
        quantity: this.quantity
      });
    }
  }
}
