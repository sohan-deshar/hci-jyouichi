import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './base/footer/footer.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StaffLoginComponent } from './staff/staff-login/staff-login.component';
import {FormsModule} from "@angular/forms";
import { MakeReservationComponent } from './manage-reservation/make-reservation/make-reservation.component';
import { PersonalInfoComponent } from './manage-reservation/make-reservation/personal-info/personal-info.component';
import { ReservationInfoComponent } from './manage-reservation/make-reservation/reservation-info/reservation-info.component';
import { OptionalsComponent } from './manage-reservation/make-reservation/optionals/optionals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import { MenuComponent } from './manage-reservation/make-reservation/optionals/menu/menu.component';
import { SeatingComponent } from './manage-reservation/make-reservation/optionals/seating/seating.component';
import { CancelReservationComponent } from './manage-reservation/cancel-reservation/cancel-reservation.component';
import { MenuItemComponent } from './manage-reservation/make-reservation/optionals/menu/menu-item/menu-item.component';
import { StaffLandingComponent } from './staff/staff-landing/staff-landing.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { ReservationTableComponent } from './staff/reservation-table/reservation-table.component';
import {HttpClientModule} from "@angular/common/http";
import { ReservationOverviewComponent } from './manage-reservation/make-reservation/reservation-overview/reservation-overview.component';
import { SuccessfulReservationComponent } from './manage-reservation/successful-reservation/successful-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    StaffLoginComponent,
    MakeReservationComponent,
    PersonalInfoComponent,
    ReservationInfoComponent,
    OptionalsComponent,
    MenuComponent,
    SeatingComponent,
    CancelReservationComponent,
    MenuItemComponent,
    StaffLandingComponent,
    ReservationTableComponent,
    ReservationOverviewComponent,
    SuccessfulReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [ModalComponent]
})
export class AppModule { }
