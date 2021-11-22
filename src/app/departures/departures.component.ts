import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from "@angular/router";
import { switchMap } from 'rxjs/operators';
import {Route} from "../core/models/route.model";
import {Direction} from "../core/models/direction.model";
import {NextripService} from "../core/services/nextrip.service";
import {Place} from "../core/models/place.model";
import {Departure} from "../core/models/departure.model";
import {Stop} from "../core/models/stop.model";

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit {
  routes: Route[];
  directions: Direction[];
  places: Place[];
  departures: Departure[];
  stops: Stop[];

  selectedRouteId: string | null;
  selectedDirectionId: number;
  selectedPlaceCode: string | null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private nextripService: NextripService) {
    console.log('[DeparturesComponent][constructor]');
    this.routes = [];
    this.directions = [];
    this.places = [];
    this.departures = [];
    this.stops = [];

    this.selectedRouteId = null;
    this.selectedDirectionId =-1;
    this.selectedPlaceCode = null;

    this.nextripService.getRoutes().subscribe( (data:any) => {
      console.log('[DeparturesComponent][constructor] Routes: ', data);
      this.routes = data;
    }, (error: Error) => {
      console.log('[DeparturesComponent][constructor] Routes error: ', error)
    });
  }

  ngOnInit() {
   this.route.paramMap.subscribe((params) => {
     const routeId = params.get('routeId');
     const directionId = new Number(params.get('directionId')).valueOf();
     const placeCode = params.get('placeCode');

     this.selectedRouteId = routeId;
     this.selectedDirectionId = directionId;
     this.selectedPlaceCode = placeCode;

     console.log('[DeparturesComponent][ngOnInit] routeId: ' + routeId + ', directionId: ' + directionId + ', placeCode: ' + placeCode);

     if (this.selectedRouteId) {
       this.nextripService.getDirections(routeId).subscribe( (data:any) => {
         console.log('[DeparturesComponent][ngOnInit] Directions: ', data);
         this.directions = data;
       }, (error: Error) => {
         console.log('[DeparturesComponent][ngOnInit] Directions error: ', error)
       });

       if (this.selectedDirectionId > -1) {
         this.nextripService.getStops(this.selectedRouteId, this.selectedDirectionId).subscribe( (data:any) => {
           console.log('[DeparturesComponent][ngOnInit] Places: ', data);
           this.places = data;

         }, (error: Error) => {
           console.log('[DeparturesComponent][ngOnInit] Places error: ', error)
         });
       }
     }

     if (routeId && directionId > -1 && placeCode) {
       this.nextripService.getDepartures(routeId, directionId, placeCode).subscribe( (data:any) => {
         console.log('[DeparturesComponent][ngOnInit] Departures: ', data);
         this.departures = data.departures;
         this.stops = data.stops;
       }, (error: Error) => {
         console.log('[DeparturesComponent][ngOnInit] Departures error: ', error)
       });
     }


   }, (error: Error) => {
     console.log('[DeparturesComponent][ngOnInit] Error:', error);
   });
  }

  onSelectRoute(routeId: any) {
    console.log('[DeparturesComponent][onSelectRoute] Route ID: ' + routeId);

    this.directions = [];
    this.places = [];
    this.departures = [];
    this.stops = [];
    this.selectedPlaceCode = null;
    this.selectedDirectionId = -1;

    this.nextripService.getDirections(routeId).subscribe( (data:any) => {
      console.log('[DeparturesComponent][onSelectRoute] Directions: ', data);
      this.directions = data;
    }, (error: Error) => {
      console.log('[DeparturesComponent][onSelectRoute] Directions error: ', error)
    });
  }

  onSelectDirection(directionId: any) {
    console.log('[DeparturesComponent][onSelectDirection] Direction ID: ' + directionId);

    this.places = [];
    this.departures = [];
    this.stops = [];
    this.selectedPlaceCode = null;


    this.nextripService.getStops(this.selectedRouteId, directionId).subscribe( (data:any) => {
      console.log('[DeparturesComponent][onSelectDirection] Places: ', data);
      this.places = data;
    }, (error: Error) => {
      console.log('[StopsComponent][onSelectDirection] Places error: ', error)
    });
  }

  onSelectStop(placeCode: any) {
    console.log('[DeparturesComponent][onSelectStop] place_code: ' + placeCode);
    const url = '/departures/' + this.selectedRouteId + '/' + this.selectedDirectionId + '/' + placeCode;
    console.log('[DeparturesComponent][onSelectStop] url: ' + url);
    this.router.navigate([url]);
  }

}
