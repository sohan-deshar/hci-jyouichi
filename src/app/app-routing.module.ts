import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StaffLoginComponent} from "./staff/staff-login/staff-login.component";
import {HomeComponent} from "./home/home.component";
import {MakeReservationComponent} from "./manage-reservation/make-reservation/make-reservation.component";
import {PersonalInfoComponent} from "./manage-reservation/make-reservation/personal-info/personal-info.component";
import {
  ReservationInfoComponent
} from "./manage-reservation/make-reservation/reservation-info/reservation-info.component";
import {OptionalsComponent} from "./manage-reservation/make-reservation/optionals/optionals.component";
import {CancelReservationComponent} from "./manage-reservation/cancel-reservation/cancel-reservation.component";
import {StaffLandingComponent} from "./staff/staff-landing/staff-landing.component";
import {StaffAuthGuard} from "./services/staff-auth.guard";
import {
  SuccessfulReservationComponent
} from "./manage-reservation/successful-reservation/successful-reservation.component";

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "staff", component: StaffLandingComponent, pathMatch: "full", canActivate: [StaffAuthGuard]},
  {path: "staff-login", component: StaffLoginComponent, pathMatch: "full"},
  {path: "make-reservation", component: MakeReservationComponent, children: [
      {path: "personal-info", component: PersonalInfoComponent},
      {path: "reservation-info", component: ReservationInfoComponent},
      {path: "optionals", component: OptionalsComponent},
    ]},
  {path: "cancel-reservation", component: CancelReservationComponent},
  {path: "successful-reservation", component: SuccessfulReservationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
