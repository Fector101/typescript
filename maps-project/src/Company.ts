import { faker } from "@faker-js/faker";

export class Company {
    companyName: string;
    catchPhrase: string;
    location: { lat: number; lng: number };
    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        };
    }
    markerContent(): string {
        return `
        <div>
            <h2>Company</h2>
            <h3>Name: ${this.companyName}</h1>
            <p>Catch phrase: ${this.catchPhrase}</p>
        </div>
        `
    }
}
