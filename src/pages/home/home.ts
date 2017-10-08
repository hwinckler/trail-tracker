import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrailTrackerProvider } from '../../providers/trail-tracker/trail-tracker';
//import { TrailMapperProvider } from '../../providers/trail-mapper/trail-mapper';
import { TrailFileWriterProvider } from '../../providers/trail-file-writer/trail-file-writer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public trailTrackerProvider: TrailTrackerProvider,
    //public trailMapperProvider: TrailMapperProvider,
    public trailFileWriterProvider: TrailFileWriterProvider
  ) {}

  start(){
    this.trailTrackerProvider.startTracking(this.trailFileWriterProvider);
  }

  stop(){
    this.trailTrackerProvider.stopTracking();
  }

  ngAfterViewInit(){
    //this.trailMapperProvider.initMap(this.mapElement);
    this.trailFileWriterProvider.prepare(Date.now() + "");
  }
}
