import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../modal/menu-item";

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.scss']
})
export class MenuBoxComponent implements OnInit {
  @Input('data') data!: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
