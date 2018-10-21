import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsImagesPage } from './event-details-images';

@NgModule({
  declarations: [
    EventDetailsImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsImagesPage),
  ],
})
export class EventDetailsImagesPageModule {}
