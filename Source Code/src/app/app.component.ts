/// <reference types="@types/googlemaps" />
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
// Import services and models
import { EarthquakeService } from '../services/earthquakeService';
import { EarthQuakeData } from '../models/earthquakeModel';
import { isNullOrUndefined, error } from 'util';
import {title,zoomLevel} from '../constants/constants'
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = title;

  // declaration for holding data from API
  featureList: EarthQuakeData[] = [];

  noDataPresent = false;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor(private earthquakeService: EarthquakeService) {
  }

  ngOnInit() {

    // Getting service from data
    this.earthquakeService.get_data().subscribe(response => {
      this.noDataPresent = false;
      if (response != isNullOrUndefined) {
        for (let feature of response.features) {

          // populating data into model array
          this.featureList.push({
            time: new Date(feature.properties.time),
            magnitude: feature.properties.mag,
            place: feature.properties.place,
            type: feature.properties.type,
            yCoordinate: feature.geometry.coordinates[1],
            xCoordinate: feature.geometry.coordinates[0],
            zCoordinate: feature.geometry.coordinates[2]
          }
          )
        }

        //Calling initialize map method
        this.initializeMap(this.featureList[0].yCoordinate, this.featureList[0].xCoordinate);
      }
      else {
        this.noDataPresent = true;
      }
    },(err)=>{
      this.noDataPresent = true;
      console.log("Following error occured",err)
    })
  }

  initializeMap(lat, lng) {

    //  Initializing map
    let mapProp = {
      center: new google.maps.LatLng(lat, lng),
      zoom: zoomLevel,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  //Method to be called on click of td for moving marker to center of Earthquake location
  setCenter(xCoordinate, yCoordinate, place) {
    this.map.setCenter(new google.maps.LatLng(yCoordinate, xCoordinate));
    let location = new google.maps.LatLng(yCoordinate, xCoordinate);
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: place
    });
  }
}

