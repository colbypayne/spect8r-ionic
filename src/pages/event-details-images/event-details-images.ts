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
    this.segment = 'settings';
  }

  get headlinerLabel(): string {
    return this.event.headliningArtists.length > 1 ? 'Headliners' : 'Artist';
  }

  get supportingLabel(): string {
    return this.event.supportingArtists.length > 0 ? 'Support' : '';
  }

  get venueName(): string {
    return this.event.venue !== undefined ? this.event.venue.venueName : '';
  }

  get date(): string {
    return this.event.eventDate !== undefined ? this.event.eventDate : '';
  }

  get setlistUrl(): string {
    return this.event.setlist !== undefined ? this.event.setlist.url : '';
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EventDetailsImagesPage');
  }

  segmentChanged() {
    // console.log('segmentChanged: ' + this.segment);
  }
}
