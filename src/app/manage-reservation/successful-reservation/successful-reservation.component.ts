import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CurrentReservationService} from "../../services/current-reservation.service";
import {ReservationEntryObject} from "../../modal/reservation-entry-object";
import {Router} from "@angular/router";
import {QRCode} from 'qrcode';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-successful-reservation',
  templateUrl: './successful-reservation.component.html',
  styleUrls: ['./successful-reservation.component.scss']
})
export class SuccessfulReservationComponent implements OnInit, AfterViewInit {
  @ViewChild('qrcontainer') qrcontainer!: ElementRef;
  qrcode = require('qrcode');

  constructor(
    public currentReservation: CurrentReservationService,
    public router: Router,
    private renderer: Renderer2,
    public menuService: MenuService
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.currentReservation.entry = new ReservationEntryObject();
  }

  ngAfterViewInit(): void {
    this.currentReservation.reservationCreated$.subscribe((data) => {
      let canvas = this.renderer.createElement('canvas');
      this.qrcode.toCanvas(
        canvas,
        JSON.stringify(this.currentReservation.entry.token),
        {
          margin: 0, width: 200, height: 200,
          errorCorrectionLevel: 'L'
        }
        ,function (error: any) {
          if (error) console.error(error)
        });
      this.renderer.appendChild(this.qrcontainer.nativeElement, canvas);
    });

  }

  onClose() {
    this.currentReservation.entry = new ReservationEntryObject();
    this.router.navigate(['/']);
  }
}
