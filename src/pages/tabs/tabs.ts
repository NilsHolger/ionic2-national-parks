import { Component } from '@angular/core';


import { ParkListPage } from '../parklist/parklist';
import { ParkMapPage } from '../parkmap/parkmap';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab2Root: any = ParkListPage;
  tab3Root: any = ParkMapPage;
  tab4Root: any = ContactPage;

  constructor() {}
}
