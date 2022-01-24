import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {CurrentReservationService} from "../../../services/current-reservation.service";
import {ReservationEntryObject} from "../../../modal/reservation-entry-object";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.scss']
})
export class ReservationInfoComponent implements OnInit {

  @ViewChild('date') date!: ElementRef;
  invalidDate: boolean = false;

  constructor(
    private currentReservation: CurrentReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.date.nativeElement.min = new Date().setDate(new Date().getDate() + 1);
  }

  onSubmit(form: NgForm) {
    // this.currentReservation.entry.date = form.value.date;
    // this.currentReservation.entry.time = form.value.time;
    // this.currentReservation.entry.numberOfGuests = form.value.numberOfGuests;

    console.log(this.currentReservation.entry);
    this.router.navigate(['/make-reservation/optionals']);
  }

  getCurrentReservation(): ReservationEntryObject {
    return this.currentReservation.entry;
  }

  goBack() {
    this.router.navigate(['/make-reservation/personal-info']);
  }

  dateInPast() {
    console.log(this.date.nativeElement);
    return this.date.nativeElement.value < new Date();
  }

  checkDate(date: NgModel) {
    let today = new Date();
    let todaysDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    console.log(new Date(date.value));
    console.log(todaysDate);
    if(new Date(date.value).getTime() < todaysDate.getTime()) {
      this.invalidDate = true;
    } else {
      this.invalidDate = false;
    }
  }
}
