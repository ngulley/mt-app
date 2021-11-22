import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from "@angular/common/http";

import { NextripService} from "./services/nextrip.service";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MenubarModule} from "primeng/menubar";
import {BreadcrumbModule} from 'primeng/breadcrumb';


const MODULES = [
  CommonModule,
  HttpClientModule,
  MenubarModule,
  BreadcrumbModule
];

const PIPES: any[] = [];

const COMPONENTS: any[] = [
  HeaderComponent,
  FooterComponent
];

const PROVIDERS = [
  NextripService
];

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS


  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    ...MODULES
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        ...PROVIDERS
      ]
    }
  }
}
