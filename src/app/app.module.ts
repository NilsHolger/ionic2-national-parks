import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ParkListPage } from '../pages/parklist/parklist';
import { ParkDetailsPage } from '../pages/parkdetails/parkdetails';
import { ParkMapPage } from '../pages/parkmap/parkmap';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    ParkListPage,
    ParkMapPage,
    ParkDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    ParkListPage,
    ParkMapPage,
    ParkDetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
