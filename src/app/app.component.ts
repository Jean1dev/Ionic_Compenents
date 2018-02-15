import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { UserDataProvider } from '../providers/localStorage/userData';


@Component({
  templateUrl: 'app.html',
  providers: [
    UserDataProvider
  ]
})
export class MyApp {
  rootPage: any  //DEFINE A PAGINA INICIAL DO APP

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    Localdata: UserDataProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let config = Localdata.getLocalData()
      
      if(config == null){
        this.rootPage = IntroPage
        Localdata.setLocalData(false)
      }else{
        this.rootPage = TabsPage
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
