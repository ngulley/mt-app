import { Component, OnInit } from '@angular/core';
import {Route} from '../core/models/route.model'
import {Direction} from '../core/models/direction.model'
import {Place} from "../core/models/place.model";
import {NextripService} from "../core/services/nextrip.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Message} from 'primeng//api';
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})

export class StopsComponent implements OnInit {
  messages: Message[];
  routes: Route[];
  directions: Direction[];
  places: Place[];
  selectedRouteId: string | null;
  selectedDirectionId: number;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private nextripService: NextripService) {
    console.log('[StopsComponent][constructor]');
    this.nextripService = nextripService;
    this.messages = [];
    this.routes = [];
    this.directions = [];
    this.places = [];

    this.selectedRouteId = null;
    this.selectedDirectionId =-1;

    this.nextripService.getRoutes().subscribe( (data:any) => {
      // console.log('[StopsComponent][constructor] Routes: ', data);
      this.routes = data;
    }, (error: Error) => {
      console.log('[StopsComponent][constructor] Routes error: ', error);
      this.messages.push({severity: 'error', summary: 'Error Message', detail: AppConstants.MESSAGES.SERVICE_ERROR});
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const routeId = params.get('routeId');
      const directionId = new Number(params.get('directionId')).valueOf();

      this.selectedRouteId = routeId;
      this.selectedDirectionId = directionId;

      if (routeId) {
        this.nextripService.getDirections(routeId).subscribe( (data:any) => {
          // console.log('[StopsComponent][onSelectRoute] Directions: ', data);
          this.directions = data;
        }, (error: Error) => {
          console.log('[StopsComponent][onSelectRoute] Directions error: ', error);
          this.messages.push({severity: 'error', summary: 'Error Message', detail: AppConstants.MESSAGES.SERVICE_ERROR});
        });
      }

      console.log('[StopsComponent][ngOnInit] routeId: ' + routeId + ', directionId: ' + directionId );

      if (routeId && directionId > -1) {
        this.nextripService.getStops(routeId, directionId).subscribe( (data:any) => {
          // console.log('[StopsComponent][ngOnInit] Places: ', data);
          this.places = data;
        }, (error: Error) => {
          console.log('[StopsComponent][ngOnInit] Places error: ', error);
          this.messages.push({severity: 'error', summary: 'Error Message', detail: AppConstants.MESSAGES.SERVICE_ERROR});
        });
      }
    }, (error: Error) => {
      console.log('[DeparturesComponent][ngOnInit] Error:', error);
    });
  }

  onSelectRoute(routeId: any) {
    console.log('[StopsComponent][onSelectRoute] Route ID: ', routeId);
    this.messages = [];
    this.directions = [];
    this.places = [];
    this.selectedDirectionId = -1;

    this.nextripService.getDirections(routeId).subscribe( (data:any) => {
      // console.log('[StopsComponent][onSelectRoute] Directions: ', data);
      this.directions = data;
    }, (error: Error) => {
      console.log('[StopsComponent][onSelectRoute] Directions error: ', error);
      this.messages.push({severity: 'error', summary: 'Error Message', detail: AppConstants.MESSAGES.SERVICE_ERROR});
    });
  }

  onSelectDirection(directionId: any) {
    console.log('[StopsComponent][onSelectDirection] Direction ID: ', directionId);
    const url = '/stops/' + this.selectedRouteId + '/' + this.selectedDirectionId;
    console.log('[StopsComponent][onSelectStop] url: ' + url);
    this.router.navigate([url]);
  }

  onSelectStop(place_code: string) {
    console.log('[StopsComponent][onSelectStop] place_code: ' + place_code);
    const url = '/departures/' + this.selectedRouteId + '/' + this.selectedDirectionId + '/' + place_code;
    console.log('[StopsComponent][onSelectStop] url: ' + url);
    this.router.navigate([url]);
  }
}



