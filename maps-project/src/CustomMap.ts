export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
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
        const marker = new google.maps.Marker({
            // new google.maps.marker.AdvancedMarkerElement({

            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
        const infowindow = new google.maps.InfoWindow({
            content: mappable.markerContent(),
        });
        marker.addListener("click", () => {
            infowindow.open(this.googleMap, marker);
        });
    }
}
