import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    private _googleMaps: GoogleMaps,
    private _geolocation: Geolocation
  ) {}

  ngAfterViewInit(){
    this.initMap();
  }

  initMap(){
    this.getLocation().then((resp) => {
      let latLng = new LatLng(resp.coords.latitude, resp.coords.longitude);

      let mapOptions = {
        'backgroundColor': 'white',
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'latLng': latLng,
          'tilt': 30,
          'zoom': 15,
          'bearing': 50
        }
      };
      let element = this.mapElement.nativeElement;
      this.map = this._googleMaps.create(element, mapOptions);

     }).catch((error) => {
       console.log('Error getting location', error);
     });


  }

  getLocation(){
    return this._geolocation.getCurrentPosition();
  }

}
