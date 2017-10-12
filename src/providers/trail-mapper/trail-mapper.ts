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
      let latLng = new LatLng(-22.32249715, -49.06886035);

      let coors : LatLng[];
      coors = [
        new LatLng(-22.32006715, -49.04175853),
        new LatLng(-22.3201223, -49.04185526),
        new LatLng(-22.32002687, -49.04213753),
        new LatLng(-22.32009033, -49.04277861),
        new LatLng(-22.32115823, -49.04345314),
        new LatLng(-22.32142374, -49.04489764),
        new LatLng(-22.32360758, -49.04599054),
        new LatLng(-22.32475623, -49.04533794),
        new LatLng(-22.32529018, -49.04522318),
        new LatLng(-22.32655669, -49.04501066),
        new LatLng(-22.32714179, -49.04484493),
        new LatLng(-22.32838764, -49.04460761),
        new LatLng(-22.32954685, -49.04438371),
        new LatLng(-22.33180586, -49.04329101),
        new LatLng(-22.33254608, -49.04433883),
        new LatLng(-22.33377334, -49.0445042),
        new LatLng(-22.33623739, -49.04406526),
        new LatLng(-22.33852899, -49.04451726),
        new LatLng(-22.33938163, -49.04729386),
        new LatLng(-22.33963212, -49.04977029),
        new LatLng(-22.33832906, -49.05190234),
        new LatLng(-22.33936452, -49.05139613),
        new LatLng(-22.34000303, -49.05019884),
        new LatLng(-22.34193533, -49.04861568),
        new LatLng(-22.34319477, -49.04901632),
        new LatLng(-22.34403722, -49.04994028),
        new LatLng(-22.3444308, -49.05044324),
        new LatLng(-22.34394047, -49.05173254),
        new LatLng(-22.34303773, -49.05089923),
        new LatLng(-22.34280177, -49.05038353),
        new LatLng(-22.34235698, -49.05013641),
        new LatLng(-22.34135774, -49.05089586),
        new LatLng(-22.34031938, -49.05166473),
        new LatLng(-22.33937282, -49.05241955),
        new LatLng(-22.33968143, -49.05295499),
        new LatLng(-22.34040777, -49.05404604),
        new LatLng(-22.34108567, -49.05509699),
        new LatLng(-22.34104862, -49.05639016),
        new LatLng(-22.33902302, -49.05792463),
        new LatLng(-22.33709932, -49.05937243),
        new LatLng(-22.33653795, -49.05960993),
        new LatLng(-22.33558681, -49.06046372),
        new LatLng(-22.33446988, -49.06102805),
        new LatLng(-22.33362338, -49.06190938),
        new LatLng(-22.33338175, -49.06208927),
        new LatLng(-22.33292946, -49.06240792),
        new LatLng(-22.33184712, -49.06321569),
        new LatLng(-22.33088897, -49.06395225),
        new LatLng(-22.3299468, -49.06474099),
        new LatLng(-22.33020512, -49.066024),
        new LatLng(-22.32936038, -49.06692878),
        new LatLng(-22.32814473, -49.06728866),
        new LatLng(-22.32575327, -49.06794643),
        new LatLng(-22.32452778, -49.06829583),
        new LatLng(-22.32338891, -49.06860896),
        new LatLng(-22.32221695, -49.06893079),
        new LatLng(-22.32271308, -49.06774591),
        new LatLng(-22.32385326, -49.06741449),
        new LatLng(-22.32501522, -49.0670406),
        new LatLng(-22.32623278, -49.066714),
        new LatLng(-22.32622203, -49.06541798),
        new LatLng(-22.32704831, -49.06617485),
        new LatLng(-22.32703223, -49.06625339),
        new LatLng(-22.32705435, -49.06624577),
        new LatLng(-22.32690742, -49.06609781),
        new LatLng(-22.32709893, -49.06631261),
        new LatLng(-22.32714868, -49.06626983),
        new LatLng(-22.32715716, -49.06623765),
        new LatLng(-22.32697169, -49.06602143),
        new LatLng(-22.32711324, -49.0660933),
        new LatLng(-22.3271483, -49.06614033),
        new LatLng(-22.3271732, -49.06556429),
        new LatLng(-22.32710569, -49.06527554),
        new LatLng(-22.32701316, -49.06499681),
        new LatLng(-22.32696129, -49.06470338),
        new LatLng(-22.32670776, -49.06458108),
        new LatLng(-22.32697745, -49.06474934),
        new LatLng(-22.32614275, -49.06568083),
        new LatLng(-22.32481403, -49.06616457),
        new LatLng(-22.3249406, -49.06681249),
        new LatLng(-22.32481465, -49.06815262),
        new LatLng(-22.32363435, -49.06848662),
        new LatLng(-22.32305083, -49.06865299),
        new LatLng(-22.32252873, -49.06882199),
        new LatLng(-22.32198991, -49.0689642),
        new LatLng(-22.32160322, -49.0685213),
        new LatLng(-22.32267074, -49.06776273),
        new LatLng(-22.32390182, -49.06740764),
        new LatLng(-22.32621529, -49.06670395),
        new LatLng(-22.32851847, -49.06603949),
        new LatLng(-22.32976158, -49.06572669),
        new LatLng(-22.33090656, -49.0654043),
        new LatLng(-22.33122375, -49.06528801),
        new LatLng(-22.33246534, -49.06496697),
        new LatLng(-22.33369775, -49.0646084),
        new LatLng(-22.33488141, -49.06429929),
        new LatLng(-22.33591385, -49.0635718),
        new LatLng(-22.33745871, -49.06153513),
        new LatLng(-22.3378708, -49.06102585),
        new LatLng(-22.33822391, -49.06057875),
        new LatLng(-22.33942192, -49.06085951),
        new LatLng(-22.33980932, -49.06124898),
        new LatLng(-22.34004998, -49.06143024),
        new LatLng(-22.34047473, -49.06177222),
        new LatLng(-22.3409872, -49.06179107),
        new LatLng(-22.34131846, -49.06134563),
        new LatLng(-22.34163764, -49.06090712),
        new LatLng(-22.34208463, -49.06065385),
        new LatLng(-22.34246386, -49.06103106),
        new LatLng(-22.34217327, -49.06146912),
        new LatLng(-22.3418834, -49.0620116),
        new LatLng(-22.3418834, -49.0620116)        
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
