import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight-model';

@Injectable()
export class FlightService {
  private _url = 'http://localhost:3000/flights';

  // Inject HttpClient.
  constructor(private _http: HttpClient) { }

  // Return all flights.
  public getFlights(): Observable<Flight[]> {
    return this._http.get<Flight[]>(this._url);
  }
}
