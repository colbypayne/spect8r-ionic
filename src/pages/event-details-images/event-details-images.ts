import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event } from "../../interfaces/event.interface";

@IonicPage()
@Component({
  selector: 'page-event-details-images',
  templateUrl: 'event-details-images.html',
})
export class EventDetailsImagesPage {
  event: Event;
  segment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.data;
    this.segment = 'images';
  }

  getDetails(key) {
    return this.event[key];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsImagesPage');
  }

  segmentChanged() {
    console.log('segmentChanged: ' + this.segment);
  }
}
