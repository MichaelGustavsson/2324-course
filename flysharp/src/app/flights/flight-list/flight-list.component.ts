import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from 'src/app/models/flight-model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  public flights: Flight[];

  constructor(private _service: FlightService) { }

  ngOnInit() {
    this._service.getFlights().subscribe(result => this.flights = result);
  }

}
