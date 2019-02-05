import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, EventResponse } from '../interfaces/event.interface';

@Injectable()
export class EventService {
  //eventsUrl = 'http://api.spect8r.com/v1/events';
  eventsUrl = 'http://localhost:10010/v1/events';

  constructor(private http: HttpClient) { }

  getAttendedEvents() {
    return this.http.get<EventResponse>(this.eventsUrl);
  }
}
