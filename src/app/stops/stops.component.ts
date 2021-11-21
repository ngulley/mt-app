import { Component, OnInit } from '@angular/core';
import {Route} from '../core/models/route.model'
import {Direction} from '../core/models/direction.model'
import {Place} from "../core/models/place.model";
import {NextripService} from "../core/services/nextrip.service";

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})

export class StopsComponent implements OnInit {
  nextripService: NextripService
  routes: Route[];
  directions: Direction[];
  places: Place[];
  selectedRoute: Route;
  selectedDirection: Direction;

  constructor(nextripService: NextripService) {
    this.nextripService = nextripService;
    this.routes = [];
    this.directions = [];
    this.places = [];
    // this.selectedRoute = { agency_id: -1, route_id: '', route_label: ''};
    this.selectedRoute = { agency_id: -1, route_id: '', route_label: ''};
    this.selectedDirection = { direction_id: -1, direction_name: ''};

    this.nextripService.getRoutes().subscribe( (data:any) => {
      console.log('[StopsComponent][constructor] Routes: ', data);
      this.routes = data;
    }, (error: Error) => {
      console.log('[StopsComponent][constructor] Routes error: ', error)
    });
  }

  ngOnInit(): void {
  }

  onSelectRoute($event: any) {
    console.log('[StopsComponent][onSelectRoute] Route ID: ' + this.selectedRoute);

    this.directions = [];
    this.places = [];

    this.nextripService.getDirections($event.selectedRoute).subscribe( (data:any) => {
      console.log('[StopsComponent][onSelectRoute] Directions: ', data);
      this.directions = data;
    }, (error: Error) => {
      console.log('[StopsComponent][onSelectRoute] Directions error: ', error)
    });
  }

  onSelectDirection($event: any) {
    console.log('[StopsComponent][onSelectDirection] Direction ID: ' + this.selectedDirection);

    let selRoute: any;
    selRoute = this.selectedRoute;

    this.nextripService.getStops(selRoute, $event.selectedDirection).subscribe( (data:any) => {
      console.log('[StopsComponent][onSelectDirection] Places: ', data);
      this.places = data;
    }, (error: Error) => {
      console.log('[StopsComponent][onSelectDirection] Places error: ', error)
    });
  }

}



