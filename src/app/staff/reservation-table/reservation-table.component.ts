import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ReservationTableDataSource } from './reservation-table-datasource';
import {ReservationEntry} from "../../modal/reservation-entry";
import {ReservationDataService} from "../../services/reservation-data.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent implements AfterViewInit {
  // @Input('date') date!: string;
  @ViewChild(MatTable) table!: MatTable<ReservationEntry>;
  dataSource!: ReservationTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['token', 'name', 'email', 'phone', 'time', 'edits'];

  constructor(private reservationDataService: ReservationDataService, private router: Router) {
  }

  ngAfterViewInit(): void {
    // this.dataSource = new ReservationTableDataSource(this.reservationDataService, this.date);
    // console.log(this.reservationDataService.date)
    this.dataSource = new ReservationTableDataSource(this.reservationDataService);
    this.table.dataSource = this.dataSource.connect();
  }

  removeReservationEntry(entryToken: string, email: string) {
    console.log("Remove button clicked");
    this.reservationDataService.removeReservationEntry(entryToken, email)
      .subscribe({
        next: data => {
          this.reservationDataService.removeReservationEntryFromCache(entryToken);
        },
        error: error => {
          let naviagtionExtras: NavigationExtras = {
            state: {
              errorMessage: error.error.message
            }
          };
          this.router.navigate(['/error'], naviagtionExtras);
          console.log(error);
        }
      });
  }
}
