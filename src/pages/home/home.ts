import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent, GoogleMapOptions, CameraPosition } from '@ionic-native/google-maps';
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
      //let latLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
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

/*      let mOptions: GoogleMapOptions = {
        mapType: 'MAP_TYPE_TERRAIN',
        camera: {
            target: {
              lat: -22.922287,
              lng: -48.421543
            },
            zoom: 15
        }
      }

      let coordinates: [
        [
          -22.922287,
          -48.421543
        ],
        [
          -22.925121,
          -48.41461
        ],
        [
          -22.926569,
          -48.40753
        ]
      ];
*/
      //let coord = coordinates.map(function(point) {
        //return {lat: point[1], lng: point[0]};
      //});


      let element = this.mapElement.nativeElement;
      this.map = this._googleMaps.create(element, mapOptions);

      this.map.one(GoogleMapsEvent.MAP_READY).then(
        () => {
          //alert('Map is ready!');
          
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

  getLocation(){
    return this._geolocation.getCurrentPosition();
  }

}
