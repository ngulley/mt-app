import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Breadcrumb} from "primeng/breadcrumb";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  showBreadcrumbs: boolean;
  breadcrumbItems: MenuItem[];

  constructor(private router: Router) {
    this.showBreadcrumbs = false;
    this.breadcrumbItems = [];

    /*
    this.router.events.subscribe((event: NavigationEnd) => {
      if (true) {

      }
    });
     */
  }

  ngOnInit(): void {
    this.breadcrumbItems = [{ label: 'Home', url: '/home'},
      { label: 'Bus & Train Stops', url: '/stops'}];
  }

}
