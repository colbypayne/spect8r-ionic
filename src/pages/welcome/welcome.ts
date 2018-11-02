import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { CreateAccountPage } from '../../pages/create-account/create-account';
import { LoginWithEmailPage } from '../../pages/login-with-email/login-with-email';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  createAccount = CreateAccountPage;
  loginWithEmail = LoginWithEmailPage;
  tabs = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook) {
  }

  loginWithFacebook()
  {
    // Login with permissions
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
      .then( (res: FacebookLoginResponse) => {
        if(res.status == "connected") {

          // TODO: persist userID and accessToken
          var fb_id = res.authResponse.userID;
          var fb_token = res.authResponse.accessToken;

          // Get user info from the API
          this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

            // Get the connected user details
            var gender    = user.gender;
            var birthday  = user.birthday;
            var name      = user.name;
            var email     = user.email;

            console.log("=== USER INFOS ===");
            console.log("Gender : " + gender);
            console.log("Birthday : " + birthday);
            console.log("Name : " + name);
            console.log("Email : " + email);

            // Open user session and redirect to the next page

            // TODO: if user exists, login and set root to tabs
            this.navCtrl.setRoot(this.tabs);

            // TODO: else push createAccountPage
            //this.navCtrl.push(this.createAccount)
        });
      } 
      else {
        console.log("An error occurred...");
      }
    })
    .catch((e) => {
      console.log('Error logging into Facebook', e);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
