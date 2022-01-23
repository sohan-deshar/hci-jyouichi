import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MenuItem} from "../modal/menu-item";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: MenuItem[] = [];
  drinks: MenuItem[] = [];
  desserts: MenuItem[] = [];
  dishes: MenuItem[] = [];

  constructor(private http: HttpClient) {
    this.http.get<MenuItem[]>('./assets/data/Menu.json').subscribe(data => {
      this.menu = data;
      this.drinks = this.menu.filter(item => item.type === 'drink');
      this.desserts = this.menu.filter(item => item.type === 'dessert');
      this.dishes = this.menu.filter(item => item.type === 'main');
      console.log(data);
    });

  }

  getMenuNameByMenuId(menuId: string): string {
    return this.menu.filter(item => item.menuId === menuId)[0].name;
  }
}
