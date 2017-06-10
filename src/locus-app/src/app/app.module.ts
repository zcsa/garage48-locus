import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ServicesDetailPage, CategoryPage} from '../pages/pages';

import { MyApp } from './app.component';
import {MapTabsPage} from '../pages/map-tabs/map-tabs'

@NgModule({
  declarations: [
    MyApp,
    MapTabsPage,
    ServicesDetailPage,
    CategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapTabsPage,
    CategoryPage,
    ServicesDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
