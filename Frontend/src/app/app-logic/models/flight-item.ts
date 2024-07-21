import { AirportItem } from './airport-item';
import { DiscountItem } from './discount-item';
import { AircraftItem } from './aircraft-item';

export class FlightItem {
  flightNumber!: number;
  departingAirport!: AirportItem;
  destinationAirport!: AirportItem;
  departingTime!: Date;
  flightTime!: number;
  aircraft!: AircraftItem;
  flightCost!: number;
  discountOffer?: DiscountItem;

  constructor(flight?: Partial<FlightItem>) {
    Object.assign(this, flight);
  }
}
