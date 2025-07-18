// This way Works but it's repeatative and kind of long
// class Vehicle {
//     color: string;
//     private age: number;
//     constructor(color: string){
//         this.color = color
//         this.age = 21
//     }
// }
// Used this instead (shortcut) 
// class Vehicle {
//     constructor(public color: string){}
// }



class Vehicle {

    // fields or attributes
    // constructor is like init for python, it runs everytime a new instance is created
    constructor(
        public color: string,
        protected weigh: number, // Can be accessed by child classes
        private owner: string // Can only be accessed by methods in current class
    ) {}
    public drive(): void {
        console.log("driving....");
    }
    public honk(): void {
        // All methods have `public` by default
        console.log("beep beepp");
    }
    protected showLights(): void {
        // Child Classes Can Use
        console.log("Showing Lights...");
    }
    private childCantClassesusetoo(): void {
        console.log("This Only can Call");
    }
}

// const vehicle = new Vehicle();
// vehicle.drive()
// vehicle.honk()

// Type of Vehicle
class Car1 extends Vehicle {
    constructor(public wheels: number, color: string) {
        //No public added to the `color` parament because don't want to create a new attr `color`, i.e it belongs to `Vehicle`
        super(color, 333, "Fabian"); // When using `extends` and you want to use `constructor` you must call `super` 
    }
    drive(): void {
        // We can't change the modifier when overriding a method
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
const car_1 = new Car1(4, "orange");
car_1.drive();
car_1.honk();
car_1.startDoingStuff();
console.log(car_1.color);
// console.log(car_1.owner);
// console.log(car_1.weigh);
