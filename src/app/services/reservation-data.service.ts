import { Injectable } from '@angular/core';
import {ReservationEntry} from "../modal/reservation-entry";
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpService} from "./http.service";
import {CurrentReservationService} from "./current-reservation.service";
import {map} from "rxjs/operators";
import {NavigationExtras, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ReservationDataService {
  data: ReservationEntry[];
  data$: BehaviorSubject<ReservationEntry[]>;

  constructor(private router: Router, private httpService: HttpService, private currentReservationService: CurrentReservationService) {
    this.data = [];
    this.data$ = new BehaviorSubject<ReservationEntry[]>([]);
  }


  getReservationData(): Observable<ReservationEntry[]>{
    return of(this.data);
  }

  removeReservationEntryFromCache(entryToken: string){
    this.data = this.data.filter(reservation => reservation.token !== entryToken);
    this.data$.next(this.data);
  }

  addReservationEntry(entry: ReservationEntry){
    // console.log("adding reservation entry: ", entry);
    return this.httpService.addReservationEntry(entry).subscribe(
      {
        next: (data) => {
          this.currentReservationService.entry.token = data.token;
          this.currentReservationService.reservationCreated$.next(data);
          // console.log("data: ", data);
        },
        error: err => {
          let naviagtionExtras: NavigationExtras = {
            state: {
              errorMessage: err.error.message
            }
          };
          this.router.navigate(['/error'], naviagtionExtras);
          // console.log("error: ", err);
        }
      }
    );
  }

  removeReservationEntry(entryToken: string, email: string): Observable<ReservationEntry>{
    return this.httpService.removeReservationEntry(entryToken, email)
      .pipe(
        map(item => {
          // console.log(item);
          return item.reservation;
        })
      );
  }

  getReservationsOnDate(date: string) {
    this.httpService.getReservationsOnDate(date)
      .subscribe({
        next: data => {
          // console.log(data);
          this.data = data;
          this.data$.next(this.data);
        },
        error: err => {
          let naviagtionExtras: NavigationExtras = {
            state: {
              errorMessage: err.error.message
            }
          };
          this.router.navigate(['/error'], naviagtionExtras);
          // console.log("error: ", err);
        }
      });

  }

  getReservedSeatsOnDateAndTime() {
    this.httpService.getSeatsReservedByDateAndTime(this.currentReservationService.entry.date, this.currentReservationService.entry.time)
      .subscribe(
        {
          next: value => {
            this.currentReservationService.reservedSeatsData$.next(value);
          },
          error: err => {
            let naviagtionExtras: NavigationExtras = {
              state: {
                errorMessage: err.error.message
              }
            };
            this.router.navigate(['/error'], naviagtionExtras);
            // console.log("error: ", err);
          }
        }
      );
  }
}
