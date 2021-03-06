import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { FlightService } from './flight.service';

@NgModule({
  declarations: [FlightListComponent, FlightDetailComponent],
  imports: [CommonModule],
  providers: [FlightService]
})
export class FlightsModule {}
