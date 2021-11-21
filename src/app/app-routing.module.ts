import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {StopsComponent} from "./stops/stops.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
