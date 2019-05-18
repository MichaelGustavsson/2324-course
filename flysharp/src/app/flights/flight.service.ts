import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Flight } from '../models/flight-model';

@Injectable()
export class FlightService {
  private _url = 'http://localhost:3000/flights';

  // Inject HttpClient.
  constructor(private _http: HttpClient) { }

  // Return all flights.
  public getFlights(): Observable<Flight[]> {
    return this._http.get<Flight[]>(this._url)
      .pipe(catchError(this.ErrorHandler));
  }

  // Errorhandling routine.
  private ErrorHandler(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `${error.status}-${error.statusText}-${error.error.message}`;
    } else {
      errorMessage = `${error.status}-${error.statusText}-${error.message}`;
    }

    // Just for debug, remove for production.
    console.error(errorMessage);
    return throwError(`Oops something went wrong, ${errorMessage}`);
  }
}
