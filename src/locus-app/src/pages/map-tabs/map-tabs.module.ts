import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapTabsPage } from './map-tabs';
import { MapPage } from '../map/map';

@NgModule({
  declarations: [
    MapTabsPage,
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapTabsPage),
  ]
})
export class MapTabsPageModule {}
