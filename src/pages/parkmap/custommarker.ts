import { Park } from '../../interfaces/Park';

export class CustomMapMarker extends google.maps.Marker {
    parkData: Park;

    constructor(theParkData : Park){
        super();
        this.parkData = theParkData;
    }
}