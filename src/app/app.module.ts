import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { CoreModule} from "./core/core.module";
import { AppComponent } from './app.component';

import {DropdownModule} from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';




import { StopsComponent } from './stops/stops.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    StopsComponent,
    HomeComponent
  ],
    imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DropdownModule,
        MenubarModule,
        TableModule,
        PanelModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
