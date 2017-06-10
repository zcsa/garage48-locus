import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MapTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-map-tabs',
  templateUrl: 'map-tabs.html'
})
@IonicPage()
export class MapTabsPage {

  mapRoot = 'MapPage'
  servicesRoot = 'ServicesPage'
  radarRoot = 'RadarPage'


  constructor(public navCtrl: NavController) {}

}
