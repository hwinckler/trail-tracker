import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Injectable()
export class TrailMapperProvider {
  map: GoogleMap;

  constructor(
    private _googleMaps: GoogleMaps,
    private _geolocation: Geolocation
  ) {}

  initMap(mapElement: ElementRef){
    this.getLocation().then((resp) => {
      let latLng = new LatLng(-22.922287, -48.421543);

      let coors : LatLng[];
      coors = [
        new LatLng(-22.922287, -48.421543),
        new LatLng(-22.925121, -48.41461),
        new LatLng(-22.926569, -48.40753),
      ];

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

      let element = mapElement.nativeElement;
      this.map = this._googleMaps.create(element, mapOptions);

      this.map.one(GoogleMapsEvent.MAP_READY).then(
        () => {
          this.map.addPolyline({
             points: coors,
             'color' : '#AA00FF',
             'width': 10,
             'geodesic': true
          });
        }
      );         

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  private getLocation(): Promise<Geoposition>{
    return this._geolocation.getCurrentPosition();
  }

}
