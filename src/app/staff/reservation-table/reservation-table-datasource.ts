import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {ReservationEntry} from "../../modal/reservation-entry";
import {ReservationDataService} from "../../services/reservation-data.service";

/**
 * Data source for the ReservationTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ReservationTableDataSource extends DataSource<ReservationEntry> {
  reservationDataService: ReservationDataService;

  // constructor(reservationDataService: ReservationDataService,private date: string) {
  //   super();
  //   this.reservationDataService = reservationDataService;
  // }
  constructor(reservationDataService: ReservationDataService) {
    super();
    this.reservationDataService = reservationDataService;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ReservationEntry[]> {
    // return this.reservationDataService.data$.asObservable();
    return this.reservationDataService.data$.asObservable();
    // if (this.paginator && this.sort) {
    //   // Combine everything that affects the rendered data into one update
    //   // stream for the data-table to consume.
    //   return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
    //     .pipe(map(() => {
    //       return this.getPagedData(this.getSortedData([...this.data ]));
    //     }));
    // } else {
    //   throw Error('Please set the paginator and sort on the data source before connecting.');
    // }
  }

 // filterData(): Observable<ReservationEntry[]>{
 //    return this.reservationDataService.data$.pipe(
 //      map(data => {
 //        return data.filter(entry => {
 //          return entry.date === this.reservationDataService.date;
 //        });
 //      })
 //    );
 // }

  //
  // filterData2(): Observable<ReservationEntry[]>{
  //   console.log(this.date);
  //   return this.reservationDataService.data$.pipe(
  //     map(data => {
  //       return data.filter(item =>{
  //         console.log(item.date, this.date);
  //         return item.date === this.date;
  //       });
  //     })
  //   );
  // }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: ReservationEntry[]): ReservationEntry[] {
  //   if (this.paginator) {
  //     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //     return data.splice(startIndex, this.paginator.pageSize);
  //   } else {
  //     return data;
  //   }
  // }
  //
  // /**
  //  * Sort the data (client-side). If you're using server-side sorting,
  //  * this would be replaced by requesting the appropriate data from the server.
  //  */
  // private getSortedData(data: ReservationEntry[]): ReservationEntry[] {
  //   if (!this.sort || !this.sort.active || this.sort.direction === '') {
  //     return data;
  //   }
  //
  //   return data.sort((a, b) => {
  //     const isAsc = this.sort?.direction === 'asc';
  //     switch (this.sort?.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'token': return compare(a.token, b.token, isAsc);
  //       case 'date': return compare(a.date, b.date, isAsc);
  //       case 'time': return compare(a.time, b.time, isAsc);
  //       case 'email': return compare(a.email, b.email, isAsc);
  //       case 'phone': return compare(a.phone, b.phone, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
