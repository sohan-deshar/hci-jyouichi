import {Order} from "./order";

export interface ReservationEntry {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  date: string;
  time: string;
  seat: string[];
  specialRequests: string;
  preOrders: Array<Order>;
}
