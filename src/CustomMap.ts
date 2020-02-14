import {Mappable} from './interfaces/Mappable';

export class CustomMap {
    private mapObject: google.maps.Map;

    constructor(containerId: string) {
        this.mapObject = new google.maps.Map(document.getElementById(containerId), {
            zoom: 1,
            center: {lat: 0, lng: 0}
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({map: this.mapObject, position: mappable.location, title: mappable.summarize()});
        marker.setIcon( `http://maps.google.com/mapfiles/ms/icons/${mappable.color}-dot.png`);
        marker.addListener('click', ()=>{
           const infoWindow = new google.maps.InfoWindow({
               content: mappable.summarize()
           });
           infoWindow.open(this.mapObject, marker);
        });
    }
}