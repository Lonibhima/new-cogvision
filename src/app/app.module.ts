import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IndustrialInspectionComponent } from './components/industrial-inspection/industrial-inspection.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SafetyAndSecurityComponent } from './components/safety-and-security/safety-and-security.component';
import {AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndustrialInspectionComponent,
    HeaderMenuComponent,
    SafetyAndSecurityComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
