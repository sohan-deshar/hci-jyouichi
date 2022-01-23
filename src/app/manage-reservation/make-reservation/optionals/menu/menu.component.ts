import {Component, Inject, Injector, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MenuService} from "../../../../services/menu.service";
import {CurrentReservationService} from "../../../../services/current-reservation.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public currentReservation: CurrentReservationService;
  public menuService: MenuService;

  constructor(
    private dialogRef: MatDialogRef<MenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {injector: Injector}
  ) {
    this.currentReservation = this.data.injector.get(CurrentReservationService);
    this.menuService = this.data.injector.get(MenuService);
  }

  ngOnInit(): void {
  }

  onSubmit(form_ref: NgForm) {
    console.log("This is from within the menu component");
    console.log(form_ref.value);
    this.dialogRef.close(form_ref.value);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSave() {
    console.log(this.currentReservation.entry);
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }
}
