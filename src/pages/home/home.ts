import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsImagesPage } from '../event-details-images/event-details-images';
import { Event, EventResponse } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';
import events from '../../data/events';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EventService]
})
export class HomePage implements OnInit {
  eventDetailsPage = EventDetailsImagesPage;
  events: Event[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private eventService: EventService) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
  }

  ngOnInit() {
    //this.events = events;
    this.eventService.getAttendedEvents()
      .subscribe((json: EventResponse) => {
        console.log(json);
        this.events = json.events;
      },
      error => console.log(error));
  }
}
