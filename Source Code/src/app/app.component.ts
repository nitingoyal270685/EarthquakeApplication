/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EarthquakeService } from '../services/earthquakeService';
import { EarthQuakeData } from '../models/earthquakeModel';
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Earthquake Analysis';

  // declaration for holding data from API
  featureList: EarthQuakeData[]=[];
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor(private earthquakeService: EarthquakeService) {
  }

  ngOnInit(){

    // Getting service from data
    this.earthquakeService.get_data().subscribe(response => {
     for (let feature of response.features){

      // populating data into model array
       
      this.featureList.push({
       time:new Date( feature.properties.time),
      magnitude:  feature.properties.mag,
      place:  feature.properties.place,
       type: feature.properties.type,
       ycoordinate: feature.geometry.coordinates[1],
       xcoordinate: feature.geometry.coordinates[0],
       zcoordinate: feature.geometry.coordinates[2]}
       )}

      //  Initializing map

       let mapProp = {
        center: new google.maps.LatLng(this.featureList[0].ycoordinate, this.featureList[0].xcoordinate),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    });    
    }
  
    //Method to be called on click of td for moving marker to center of Eearthquake location

    setCenter(xcoordinate,ycoordinate) {
      this.map.setCenter(new google.maps.LatLng(ycoordinate, xcoordinate));
  
      let location = new google.maps.LatLng(ycoordinate, xcoordinate);
  
      let marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Earthquake point'
      });
    }
}

