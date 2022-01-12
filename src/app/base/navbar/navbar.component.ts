import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event);
      }
    })
  }

  ngOnInit(): void {
  }

}
