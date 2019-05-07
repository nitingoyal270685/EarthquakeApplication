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
  title = 'earthquake Analysis';
  featureList: EarthQuakeData[]=[];
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor(private earthquakeService: EarthquakeService) {
  }

  ngOnInit(){
    this.earthquakeService.get_data().subscribe(response => {
     for (let p of response.features){
       this.featureList.push({
       time:new Date( p.properties.time),
      magnitude:  p.properties.mag,
      place:  p.properties.place,
       type: p.properties.type,
       ycoordinate: p.geometry.coordinates[1],
       xcoordinate: p.geometry.coordinates[0],
       zcoordinate: p.geometry.coordinates[2]}
       )}
       console.log(this.featureList)
       let mapProp = {
        center: new google.maps.LatLng(this.featureList[0].ycoordinate, this.featureList[0].xcoordinate),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    });

    
    }
  
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

