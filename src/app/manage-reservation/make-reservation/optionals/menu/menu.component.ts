import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MenuService} from "../../../../services/menu.service";
import {MenuItem} from "../../../../modal/menu-item";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public menuService: MenuService
  ) {
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
}
