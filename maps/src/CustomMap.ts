import { User } from "./User";
import { Company } from "./Company";
import { company } from "faker";

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {lat: 0, lng: 0}
        })
    }

    public addUserMarker(user: User): void {        
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            },
        })
    }

    public addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            },
        })
    }

    public addMarker(entity: User | Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {	
                lat: entity.location.lat,
                lng: entity.location.lng
            }
        })
    }
}