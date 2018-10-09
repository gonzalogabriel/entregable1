import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.loadMap();
  }
  loadMap(){

    Environment.setEnv({

      'API_KEY_FOR_BROWSER_RELEASE':'AIzaSyATFE8z_EcmfJTU_ig4avw6VW2pq78d0PQ',
      'API_KEY_FOR_BROWSER_DEBUG':'AIzaSyATFE8z_EcmfJTU_ig4avw6VW2pq78d0PQ'


    });
   this.map = GoogleMaps.create ('map_canvas') ;
  }

}
