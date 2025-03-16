import { Company } from "./Company";
import { User } from "./User";

interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(div_id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(div_id), {
            zoom: 1,
            center: { lat: 0, lng: 0 },
        });
    }
    addMarker(mappable: Mappable): void {
        // addMarker(mappable: {location:{lat:number,lng:number}}): void {
        new google.maps.Marker({
            // new google.maps.marker.AdvancedMarkerElement({

            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
    }
}
