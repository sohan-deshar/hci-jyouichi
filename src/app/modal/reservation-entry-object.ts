import {ReservationEntry} from "./reservation-entry";
import {Order} from "./order";

function generateRandomToken() {
  return generateString(10);
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length: number) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export class ReservationEntryObject implements ReservationEntry{


  private _date!: string;
  private _email!: string;
  private _firstName!: string;
  private _lastName!: string;
  private _numberOfGuests!: number;
  private _phone!: string;
  private _preOrders: Order[] = [];
  private _seat: string[] = [];
  private _specialRequests!: string;
  private _time!: string;
  private _token!: string;



  constructor() {
    this._phone = "";
    this._specialRequests = "";

    this._token = generateRandomToken();
  }

  getOrderQuantityByMenuId(menuId: string): number {
    if(this._preOrders == null) {
      return 0;
    }
    for (const order of this._preOrders) {
      if (order.menuId === menuId) {
        return order.quantity;
      }
    }
    return 0;
  }

  addOrderItem(order: Order) {
    for(const item of this._preOrders) {
      if(item.menuId === order.menuId) {
        item.quantity = order.quantity;
        return;
      }
    }
    this._preOrders.push(order);
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get numberOfGuests(): number {
    return this._numberOfGuests;
  }

  set numberOfGuests(value: number) {
    this._numberOfGuests = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get preOrders(): Order[] {
    return this._preOrders;
  }

  set preOrders(value: Order[]) {
    this._preOrders = value;
  }

  get seat(): string[] {
    return this._seat;
  }

  set seat(value: string[]) {
    this._seat = value;
  }

  get specialRequests(): string {
    return this._specialRequests;
  }

  set specialRequests(value: string) {
    this._specialRequests = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  addSeat(item: string) {
     if(item in this._seat) {
       return;
     }else {
       this._seat.push(item);
     }
  }
}
