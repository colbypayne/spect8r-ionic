import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventDetailsPage } from './add-event-details';

@NgModule({
  declarations: [
    AddEventDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventDetailsPage),
  ],
})
export class AddEventDetailsPageModule {}
