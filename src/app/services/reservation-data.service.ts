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
    this.saveReservationDataLocally();
  }

  saveReservationDataLocally(){
    this.http.get<ReservationEntry[]>("./assets/data/reservation-data.json").subscribe(data =>{

        this.data = data;
        this.data$.next(this.data);
    }
    );
  }

  getReservationData(): Observable<ReservationEntry[]>{
    return of(this.data);
  }

  addReservationEntry(entry: ReservationEntry): void{
    this.http.post('./assets/data/reservation-data.json', entry).subscribe(data => {
      this.data.push(entry);
    });
  }

  removeReservationEntry(entryToken: string): void{
    this.data.splice(this.data.findIndex(f => f.token == entryToken), 1);
    this.data$.next(this.data);
  }
}
