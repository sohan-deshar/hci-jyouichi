import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MenuItem} from "../modal/menu-item";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: any;
  drinks: MenuItem[] = [];
  deserts: MenuItem[] = [];
  dishes: MenuItem[] = [];

  constructor(private http: HttpClient) {
    this.http.get<{'drinks': MenuItem[], 'main_dishes': MenuItem[], 'deserts': MenuItem[]}>('./assets/data/Menu.json').subscribe(data => {
      this.menu = data;
      this.drinks = this.menu['drinks'];
      this.dishes = this.menu['main_dishes'];
      this.deserts = this.menu['deserts'];
      console.log(data);
    });
  }
}
