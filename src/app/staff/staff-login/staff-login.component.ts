import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.scss']
})
export class StaffLoginComponent implements OnInit {

  form?: NgForm;
  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.form = form;
    this.authService.validateData(this.form.value);
    if(this.authService.isValidated){
      this.router.navigate(['staff']);
      this._snackBar.open(`Logged in as ${this.form.value.username}`, '', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }

}
