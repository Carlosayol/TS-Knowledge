export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {lat: 0, lng: 0}
        })
    }

    // public addMarker(position: google.maps.LatLngLiteral) {

    // }
}