import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeparturesComponent } from './departures.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {NextripService} from "../core/services/nextrip.service";
import { AppRoutingModule} from "../app-routing.module";

const MAX_TIMEOUT = 20000;

/*
let mockRouter = {
  navigate: jasmine.createSpy('navigate')
} */

describe('DeparturesComponent', () => {
  let component: DeparturesComponent;
  let nextripService: NextripService;
  let fixture: ComponentFixture<DeparturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,
                // RouterTestingModule,
                RouterTestingModule.withRoutes([
                  { path: 'departures', component: DeparturesComponent },
                  { path: 'departures/:routeId/:directionId/:placeCode', component: DeparturesComponent }
                ]),
                AppRoutingModule],
      declarations: [ DeparturesComponent ],
      providers: [
        // { provide: Router, useValue: mockRouter},
      ]
    })
      .compileComponents();
  }, MAX_TIMEOUT);

  beforeEach(async () => {
    fixture = TestBed.createComponent(DeparturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }, MAX_TIMEOUT);

  it('should create', () => {
    expect(component).toBeTruthy();
  },MAX_TIMEOUT);

  it('The Directions dropdown list should default to being empty on the initial page load', () => {
    expect(component.directions.length).toBe(0);
  });

  it('The Stops dropdown list should default to being empty on the initial page load', () => {
    expect(component.places.length).toBe(0);
  });

  it('The Departures table should default to being empty on the initial page load', () => {
    expect(component.departures.length).toBe(0);
  });

  it('The Routes dropdown list should populate within 3 seconds of the initial page load', (done) => {
    expect(component.routes.length).toBe(0);
    setTimeout(function() {
      expect(component.routes.length).toBeGreaterThan(0);
      done();
    }, 3000);
  });

  it('The Directions dropdown list should populate within 3 seconds after a route is selected', (done) => {
    setTimeout(function() {
      component.onSelectRoute('2');
      setTimeout(function() {
        expect(component.routes.length).toBeGreaterThan(0);
        done();
      }, 3000);
    }, 3000);
  }, MAX_TIMEOUT);


  it('The Stops dropdown list should populate within 3 seconds after a direction is selected', (done) => {
    setTimeout(function() {
      component.selectedRouteId = '2';
      component.onSelectRoute('2');
      setTimeout(function() {
        component.selectedDirectionId = 0;
        component.onSelectDirection(0);
        setTimeout(function() {
          expect(component.places.length).toBeGreaterThan(0);
          done();
        }, 3000);
      }, 3000);
    }, 3000);
  }, MAX_TIMEOUT);

  /* TODO: figure out why it's failing
  it('Departures table should populate in under 3 seconds when a stop is selected', (done) => {
    setTimeout(function() {
      component.selectedRouteId = '2';
      component.onSelectRoute('2');
      setTimeout(function() {
        component.selectedDirectionId = 0;
        component.onSelectDirection(0);
        setTimeout(function() {
          component.selectedPlaceCode = '22HE';
          component.onSelectStop('22HE');
          setTimeout(function() {
            // expect (mockRouter.navigate).toHaveBeenCalledWith (['/departures/2/0/22HE']);
            expect(component.departures.length).toBeGreaterThan(0);
            done();
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }, MAX_TIMEOUT);
   */
});
