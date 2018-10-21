import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsImagesPage } from '../event-details-images/event-details-images';
import { Event } from "../../interfaces/event.interface";
import events from '../../data/events'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  eventDetailsPage = EventDetailsImagesPage;
  events: Event[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ngOnInit() {
    this.events = events;
  }
}
