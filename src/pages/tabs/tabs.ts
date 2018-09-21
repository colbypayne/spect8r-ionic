import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AddEventPage } from '../add-event/add-event';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
      <ion-tab [root]="addEventPage" tabTitle="Add Event" tabIcon="add"></ion-tab>
      <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="cog"></ion-tab>
      <ion-tab [root]="profilePage" tabTitle="Profile" tabIcon="person"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  homePage = HomePage;
  addEventPage = AddEventPage;
  settingsPage = SettingsPage;
  profilePage = ProfilePage;
}