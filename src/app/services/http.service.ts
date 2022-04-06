import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReservationEntry} from "../modal/reservation-entry";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private reservationUrl = 'http://localhost:8080/api/reservation';

  constructor(private httpClient: HttpClient) { }

  addReservationEntry(reservationEntry: ReservationEntry){
    return this.httpClient.post<ReservationEntry>(`${(this.reservationUrl)}/add`, reservationEntry);
  }

  removeReservationEntry(token: string, email: string) {
    let requestBody = {
      body: {
        'token': token,
        'email': email
      }
    };
    return this.httpClient
      .delete<{message: string, reservation: ReservationEntry}>(
        `${(this.reservationUrl)}/delete`, requestBody
      )

  }

  getReservationsOnDate(date: string) {
    return this.httpClient.get<ReservationEntry[]>(`${(this.reservationUrl)}/get-by-date/?date=${date}`);

  }
}
