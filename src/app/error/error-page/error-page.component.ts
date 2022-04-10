import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string = "test";
  timeStamp: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      errorMessage: string,
      timeStamp: string
    };
    this.errorMessage = state?.errorMessage ? state.errorMessage : "404 NOT FOUND";
    this.timeStamp = state?.timeStamp ? state.timeStamp : new Date().toLocaleString().toString();
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
