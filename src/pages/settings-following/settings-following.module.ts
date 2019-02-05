import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsFollowingPage } from './settings-following';

@NgModule({
  declarations: [
    SettingsFollowingPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsFollowingPage),
  ],
})
export class SettingsFollowingPageModule {}
