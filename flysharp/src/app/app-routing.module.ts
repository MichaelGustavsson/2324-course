import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';

const routes: Routes = [
  { path: 'flights', component: FlightListComponent },
  { path: 'flights/:id', component: FlightDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
