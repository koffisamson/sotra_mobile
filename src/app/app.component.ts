import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    {
      title: 'Lignes et Itinéraires',
      url: '/home',
      icon: 'car'
    },    
    {
      title: 'Recharger Votre Carte',
      url: '/carte',
      icon: 'md-card'
    },
    {
      title: 'Ma position',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'md-help'
    },
    {
      title: 'Aide',
      url: '/aide',
      icon: 'contact'
    }  
  
   
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
