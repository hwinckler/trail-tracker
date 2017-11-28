import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
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
   // public trailMapperProvider: TrailMapperProvider,
    public trailFileWriterProvider: TrailFileWriterProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  click(){
    if(!this.trailTrackerProvider.isStarted){
      this.trailTrackerProvider.startTracking(this.trailFileWriterProvider);
    }
    else{
      let prompt = this.alertCtrl.create({
        message: "My trail name",
        inputs: [
          {
            name: 'name',
            placeholder: 'name'
          },
        ],
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'Save',
            handler: data => {
              this.trailTrackerProvider.stopTracking(this.trailFileWriterProvider, data.name)
              .then(() => {
                let toast = this.toastCtrl.create({
                  message: 'Save successfully',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
              });
            }
          }
        ]
      });
      prompt.present();
      
    }
    
  }
  ngAfterViewInit(){
    //this.trailMapperProvider.initMap(this.mapElement);
    this.trailFileWriterProvider.prepare(Date.now() + "");
    //this.trailFileWriterProvider.dirCreated = true;
  }
}
