import { Injectable } from '@angular/core';
import {ReservationEntry} from "../modal/reservation-entry";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpService} from "./http.service";
import {CurrentReservationService} from "./current-reservation.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReservationDataService {
  // date: string = "";
  data: ReservationEntry[];
  data$: BehaviorSubject<ReservationEntry[]>;

  constructor(private http: HttpClient, private httpServcie: HttpService, private currentReservationService: CurrentReservationService) {
    this.data = [];
    this.data$ = new BehaviorSubject<ReservationEntry[]>([]);
    this.getReservationDataFromFile();
  }

  getReservationDataFromFile(){
    this.http.get<ReservationEntry[]>("./assets/data/reservation-data.json").subscribe(data =>{

        this.data = data;
        this.data$.next(this.data);
    }
    );
  }

  getReservationData(): Observable<ReservationEntry[]>{
    return of(this.data);
  }

  getReservationByReservationToken(reservationToken: string): ReservationEntry | null{
    console.log("searching for ",reservationToken);
    for(let i = 0; i < this.data.length; i++){
      console.log(this.data[i].token);
      if(this.data[i].token === reservationToken){
        console.log("found reservation");
        return this.data[i];
      }
    }
    console.log(this.data.find(reservation => reservation.token === reservationToken));
    if(this.data.find(reservation => reservation.token === reservationToken))
      return this.data.filter(reservation => reservation.token === reservationToken)[0];
    else
      return null;
  }

  removeReservationEntryFromCache(entryToken: string){
    this.data = this.data.filter(reservation => reservation.token !== entryToken);
    this.data$.next(this.data);
  }

  addReservationEntry(entry: ReservationEntry){
    console.log("adding reservation entry: ", entry);
    return this.httpServcie.addReservationEntry(entry).subscribe(
      {
        next: (data) => {
          this.currentReservationService.entry.token = data.token;
          this.currentReservationService.reservationCreated$.next(data);
          console.log("data: ", data);
        },
        error: err => {
          console.log("error: ", err);
        }
      }
    );
  }

  removeReservationEntry(entryToken: string, email: string): Observable<ReservationEntry>{
    return this.httpServcie.removeReservationEntry(entryToken, email)
      .pipe(
        map(item => {
          console.log(item);
          return item.reservation;
        })
      );
    // let res = this.getReservationByReservationToken(entryToken);
    // if(res != null){
    //   this.data.splice(this.data.findIndex(f => f.token == entryToken), 1);
    //   this.data$.next(this.data);
    //   console.log(`${entryToken} removed`);
    //   console.log(this.data);
    //   return res;
    // } else {
    //   return null;
    // }
  }

  getReservationsOnDate(date: string) {
    this.httpServcie.getReservationsOnDate(date)
      .subscribe({
        next: data => {
          console.log(data);
          this.data = data;
          this.data$.next(this.data);
        },
        error: err => {
          console.log(err);
        }
      });

  }
}
