import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Home',
            // icon: 'pi pi-fw pi-list',
            routerLink: '/home'
          },
          {
            label: 'Bus & Train Stops',
            // icon: 'pi pi-fw pi-list',
            routerLink: '/stops'
          },
          {
            label: 'Bus & Train Departures',
            // icon: 'pi pi-fw pi-clock',
            routerLink: '/departures'
          }
        ]
      }
    ];


  }

}
