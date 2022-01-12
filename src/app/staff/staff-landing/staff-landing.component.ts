import { Component, OnInit } from '@angular/core';
import {ReservationDataService} from "../../services/reservation-data.service";

@Component({
  selector: 'app-staff-landing',
  templateUrl: './staff-landing.component.html',
  styleUrls: ['./staff-landing.component.scss']
})
export class StaffLandingComponent implements OnInit {
  displayedColumns = ["seqNo", "description", "duration"];
  dataSource: any;
  dateSelected: boolean = false;

  constructor(private reservationDataService: ReservationDataService) { }

  ngOnInit(): void {
  }

  setDate(date: string) {
    this.dateSelected = true;
    this.reservationDataService.date = date;
    this.reservationDataService.data$.next(this.reservationDataService.data);
  }
}
