import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import {Park} from '../../interfaces/park';
import {ParkService} from '../../services/parkservice';
import {ParkDetailsPage} from '../parkdetails/parkdetails';

import {CustomMapMarker} from './custommarker';

@Component({selector: 'page-parkmap', templateUrl: 'parkmap.html'})
export class ParkMapPage {
  map: google.maps.Map;
  parks: Array<Park> = [];


  constructor(
      public navCtrl: NavController, public platform: Platform,
      public parkService: ParkService) {
    this.map = null;
    this.platform.ready().then(() => { this.initializeMap(); })
  }

  initializeMap() {
    let image = 'assets/img/nps_arrowhead.png';
    let minZoomLevel: number = 3;
    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng(39.833, -98.583),
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    this.parkService.getParks().then(theResult => {
      this.parks = theResult;
      for (let thePark of this.parks) {
        let parkPos: google.maps.LatLng =
            new google.maps.LatLng(thePark.lat, thePark.long);
        let parkMarker: google.maps.Marker = new CustomMapMarker(thePark);
        parkMarker.setPosition(parkPos);
        parkMarker.setMap(this.map);
        parkMarker.setIcon(image);
        google.maps.event.addListener(parkMarker, 'click', () => {
          let selectedMarker: any = parkMarker;
          this.navCtrl.push(
              ParkDetailsPage, {parkData: selectedMarker.parkData});
        });
      }
    })
  }
  ionViewDidLoad() { console.log('ionViewDidLoad ParkmapPage'); }
}
