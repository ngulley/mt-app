import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {StopsComponent} from "./stops/stops.component";
import {DeparturesComponent} from "./departures/departures.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stops',
    component: StopsComponent
  },
  {
    path: 'stops/:routeId/:directionId',
    component: StopsComponent
  },
  {
    path: 'departures',
    component: DeparturesComponent
  },
  {
    path: 'departures/:routeId/:directionId/:placeCode',
    component: DeparturesComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
