export class CustomMap{
    private mapObject: google.maps.Map;

    constructor(containerId: string) {
        this.mapObject = new google.maps.Map(document.getElementById(containerId), {
            zoom: 1,
            center: {lat: 0, lng: 0}
        });
    }
}