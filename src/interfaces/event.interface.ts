export interface Event {
  'eventId': number;
  'eventName': string;
  'eventType': string;
  'eventDate': string;
  'eventImages': any[];
  'myImages': any[];
  'headliningArtists': any[];
  'supportingArtists': any[];
  'posterArtist': string;
  'venue': any;
  'audio': any;
  'setlist': any;
}

export interface EventResponse {
  'events': Event[];
}
