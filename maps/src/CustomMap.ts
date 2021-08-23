interface Mappable {
    location: {
        lat: number
        lng: number
    }

    markerContent(): string
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {lat: 0, lng: 0}
        })
    }

    public addMarker(entity: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {	
                lat: entity.location.lat,
                lng: entity.location.lng
            }
        })
        
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: entity.markerContent()
            })
            infoWindow.open(this.googleMap, marker);
        })
    }
    
}