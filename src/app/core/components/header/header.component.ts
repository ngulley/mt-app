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
        label: 'Tools',
        // icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Show Bus Stops',
            icon: 'pi pi-fw pi-list'
          },
          {
            label: 'Show My Bus',
            icon: 'pi pi-fw pi-map-marker'
          }
        ]
      }
    ];
  }

}
