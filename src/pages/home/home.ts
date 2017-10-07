import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrailTrackerProvider } from '../../providers/trail-tracker/trail-tracker';
import { TrailMapperProvider } from '../../providers/trail-mapper/trail-mapper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public trailTrackerProvider: TrailTrackerProvider,
    public trailMapperProvider: TrailMapperProvider
  ) {}

  start(){
    this.trailTrackerProvider.startTracking();
  }

  stop(){
    this.trailTrackerProvider.stopTracking();
  }

  ngAfterViewInit(){
    this.trailMapperProvider.initMap(this.mapElement);
  }
}
