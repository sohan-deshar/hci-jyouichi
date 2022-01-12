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

export class ReseravtionEntryObject implements ReservationEntry{


  private _date!: string;
  private _email!: string;
  private _name!: string;
  private _numberOfGuests!: number;
  private _phone!: string;
  private _preOrders!: Order[];
  private _seat!: string;
  private _specialRequests!: string;
  private _time!: string;
  private _token!: string;


  constructor() {
    this._phone = "";
    this._preOrders = [];
    this._seat = "";
    this._specialRequests = "";

    this._token = generateRandomToken();
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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

  get seat(): string {
    return this._seat;
  }

  set seat(value: string) {
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

}
