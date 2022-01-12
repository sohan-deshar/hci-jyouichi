import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ReservationTableDataSource, ReservationTableItem } from './reservation-table-datasource';
import {ReservationEntry} from "../../modal/reservation-entry";
import {ReservationDataService} from "../../services/reservation-data.service";

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

  constructor(private reservationDataService: ReservationDataService) {
  }

  ngAfterViewInit(): void {
    // this.dataSource = new ReservationTableDataSource(this.reservationDataService, this.date);
    console.log(this.reservationDataService.date)
    this.dataSource = new ReservationTableDataSource(this.reservationDataService);
    this.table.dataSource = this.dataSource.connect();
  }

  removeReservationEntry(entryToken: string){
    this.reservationDataService.removeReservationEntry(entryToken);
  }
}
