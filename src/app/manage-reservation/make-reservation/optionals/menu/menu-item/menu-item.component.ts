import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input("src")pictureUrl: string = "";
  @Input()title: string = "The name of dish";
  @Input()desc: string = "The description of the menu item";
  quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}