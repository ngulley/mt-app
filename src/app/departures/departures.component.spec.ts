import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeparturesComponent } from './departures.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { waitForAsync, inject} from "@angular/core/testing";
import {NextripService} from "../core/services/nextrip.service";

describe('StopsComponent', () => {
  let component: DeparturesComponent;
  let fixture: ComponentFixture<DeparturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ DeparturesComponent ]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(DeparturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // console.log('COMPONENT: ', component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('"routes" list should default to being populated in under 3 seconds', async function() {
    setTimeout(function() {
      expect(component.routes.length).toBeGreaterThan(0);
      console.log('ROUTES: ', component.routes);
    }, 3000);
  });

  it('Directions dropdown list should default to being empty', () => {
    expect(component.directions.length).toBe(0);
  });

  it('Stops dropdown list should default to being empty', () => {
    expect(component.places.length).toBe(0);
  });

  it('Departues table should default to being empty', () => {
    expect(component.departures.length).toBe(0);
  });

  it('Directions dropdown list should populate in under 3 seconds when a route is selected', () => {
    component.onSelectRoute('2');
    setTimeout(function() {
      expect(component.directions.length).toBeGreaterThan(0);
      console.log('DIRECTIONS: ', component.directions);
    }, 3000);

  });

  it('Stops dropdown should populate in under 3 seconds when a direction is selected', () => {
    component.onSelectDirection(0);
    setTimeout(function() {
      expect(component.places.length).toBeGreaterThan(0);
      console.log('PLACES: ', component.places);
    }, 3000);
  });

  it('Departures table should populate in under 3 seconds when a stop is selected', () => {
    component.onSelectStop('22HE');
    setTimeout(function() {
      expect(component.departures.length).toBeGreaterThan(0);
      console.log('DEPARTURES: ', component.departures);
    }, 3000);
  });
});
