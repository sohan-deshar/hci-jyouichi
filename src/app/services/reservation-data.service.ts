import { Injectable } from '@angular/core';
import {ReservationEntry} from "../modal/reservation-entry";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationDataService {
  date: string = "";
  data: ReservationEntry[];
  data$: BehaviorSubject<ReservationEntry[]>;

  constructor(private http: HttpClient) {
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

  addReservationEntry(entry: ReservationEntry): void{
    this.data.push(entry);
    // console.log(this.data);
  }

  removeReservationEntry(entryToken: string): ReservationEntry | null{
    let res = this.getReservationByReservationToken(entryToken);
    if(res != null){
      this.data.splice(this.data.findIndex(f => f.token == entryToken), 1);
      this.data$.next(this.data);
      console.log(`${entryToken} removed`);
      console.log(this.data);
      return res;
    } else {
      return null;
    }
  }
}
