import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ParkService} from '../../services/parkservice';
import {ParkDetailsPage} from '../parkdetails/parkdetails';


@Component({selector: 'page-parklist', templateUrl: 'parklist.html'})
export class ParkListPage {
  parks: Array<Object> = [];
  searchQuery = '';
  constructor(public navCtrl: NavController, public parkService: ParkService) {
    parkService.getParks().then(theResult => { this.parks = theResult; })
  }

  getParks(event) {
    this.parkService.getParks().then(theResult => { this.parks = theResult; })

        let queryString = event.target.value;

    if (queryString !== undefined) {
      if (queryString.trim() == '') {
        return;
      }
      this.parkService.getFilteredParks(queryString).then(theResult => {
        this.parks = theResult;
      })
    }
  }

  goParkDetails(theParkData) {
    console.log(theParkData);
    this.navCtrl.push(ParkDetailsPage, {parkData: theParkData});
  }

  customHeaderFn(record, recordIndex, records) {
    if (recordIndex > 0) {
      if (record.name.charAt(0) !== records[recordIndex - 1].name.charAt(0)) {
        return record.name.charAt(0);
      } else {
        return null;
      }
    } else {
      return record.name.charAt(0);
    }
  }

  resetList(event) {
    this.parkService.getParks().then(theResult => { this.parks = theResult; })
  }
}
