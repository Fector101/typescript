interface Vehicle {
    // name: string; optional
    year: number;
    broken: boolean;
    summary(): string; //function that returns a string
}
interface Reportable {
    summary(): string;
}
const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle);
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};
printVehicle(oldCivic);
printSummary(oldCivic)

const drink = {
    color: "brown",
    carbonated: true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`
    }
};
printSummary(drink)