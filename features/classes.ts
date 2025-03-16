class Vehicle {
    drive(): void {
        console.log("driving....");
    }
    public honk(): void {
        // All methods have `public` by default
        console.log("beep beepp");
    }
    protected showLights(): void { // Child Classes Can Use
        console.log("Showing Lights...");
    }
    private childCantClassesusetoo(): void {
        console.log("This Only can Call");
    }
}

const vehicle = new Vehicle();
// vehicle.drive()
// vehicle.honk()

// Type of Vehicle
class Car1 extends Vehicle {
    drive(): void {
        // Override Super method drive
        console.log("vroom");
    }
    private doStuff(): void {
        console.log("Doing Stuff...");
    }
    startDoingStuff() {
        // Now Instances have a way to call `doStuff`
        this.doStuff();
        this.showLights();
        // this.childCantClassesusetoo()
    }
}
const car_1 = new Car1();
car_1.drive();
car_1.honk();
car_1.startDoingStuff();
