import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { TrailFileWriterProvider } from '../../providers/trail-file-writer/trail-file-writer';
import 'rxjs/add/operator/filter';

@Injectable()
export class TrailTrackerProvider {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
  public isStarted: boolean = false;

  private _backgroundGeolocationConfig: BackgroundGeolocationConfig = {
    desiredAccuracy: 10,
    stationaryRadius: 20,
    distanceFilter: 30,
    debug: false,
    stopOnTerminate: true
  };

  private _geolocationOptions: GeolocationOptions = {
    enableHighAccuracy: false,
    maximumAge: 3000,
    timeout: 5000
  };

  constructor(private _zone: NgZone, private _backgroundGeolocation: BackgroundGeolocation, private _geolocation: Geolocation) {
  }

  public startTracking(trailFileWrite: TrailFileWriterProvider) {
    this.isStarted = true;
    this._backgroundGeolocation.configure(this._backgroundGeolocationConfig)
    .subscribe((location: BackgroundGeolocationResponse) => {
      this._zone.run(() => {
        trailFileWrite.write(location.latitude + ":" + location.longitude + ":" + location.altitude + ":" + new Date().toISOString() + "BP;\n");
        this.lat = location.latitude;
        this.lng = location.longitude;
      });
    });     

    this.watch = this._geolocation.watchPosition(this._geolocationOptions).filter((p: any) => p.code === undefined)
    .subscribe((data) => {
      this._zone.run(() => {
        trailFileWrite.write(data.coords.latitude + ":" + data.coords.longitude + ":" + data.coords.altitude + ":" + new Date().toISOString() + ":GP;\n");
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
      });
    });

    this._backgroundGeolocation.start();
  }

  public stopTracking() {
    this.isStarted = false;
    this.lat = 0;
    this.lng = 0; 
    this._backgroundGeolocation.finish();
    this._backgroundGeolocation.stop();
    this.watch.unsubscribe();
    this.watch.stop();
  }
}
