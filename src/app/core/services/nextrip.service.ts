import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NextripService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getDirections(route_id: string) {
    console.log('[NextripService][getDirections] route_id: ' + route_id);
    const url = 'https://svc.metrotransit.org/nextripv2/directions/' + route_id
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = {};

    const httpOptions = {headers: {}, params: {}};
    httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(url, httpOptions);
  }

  getRoutes() {
    const url = 'https://svc.metrotransit.org/nextripv2/routes'
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = {};

    const httpOptions = {headers: {}, params: {}};
    httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(url, httpOptions);
  }

  getStops(route_id: string, direction_id: number) {
    console.log('[NextripService][getStops] route_id: ' + route_id + ', direction_id: ' + direction_id);

    const url = 'https://svc.metrotransit.org/nextripv2/stops/' + route_id + '/' + direction_id
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = {};

    const httpOptions = {headers: {}, params: {}};
    httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(url, httpOptions);
  }
}
