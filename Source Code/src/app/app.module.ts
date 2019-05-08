import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Importing all components, services and models
import { AppComponent } from './app.component';
import { EarthquakeService} from '../services/earthquakeService'
import { EarthQuakeData} from '../models/earthquakeModel'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EarthquakeService,
    EarthQuakeData],
  bootstrap: [AppComponent]
})
export class AppModule { }
