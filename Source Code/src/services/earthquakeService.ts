import { HttpClient } from '@angular/common/http';
import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class EarthquakeService{
    private baseUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'

    constructor(private httpClient: HttpClient) {
    }

    get_data(): any{
      // Calling API for getting response for Earthquake data
      
      return this.httpClient.get(this.baseUrl);
}
}