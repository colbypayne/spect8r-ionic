import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventDetailsImagesPage } from '../pages/event-details-images/event-details-images';
import { AddEventPage } from '../pages/add-event/add-event';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { LoginWithEmailPage } from '../pages/login-with-email/login-with-email';
import { WelcomePage } from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventDetailsImagesPage,
    AddEventPage,
    ProfilePage,
    SettingsPage,
    TabsPage,
    CreateAccountPage,
    LoginWithEmailPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventDetailsImagesPage,
    AddEventPage,
    ProfilePage,
    SettingsPage,
    TabsPage,
    CreateAccountPage,
    LoginWithEmailPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
