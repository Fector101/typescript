class ArrayOfNumbers {
    constructor(public collection: number[]) { }

    get(index: number): number {
        return this.collection[index]
    }
}
class ArrayOfStrings {
    constructor(public collection: string[]) { }

    get(index: number): string {
        return this.collection[index]
    }
}

class ArrayOfAnyThing<T> { // "T" just an argument
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index]
    }
}

new ArrayOfAnyThing<string>(['a', 'b', 'c'])
new ArrayOfAnyThing(['a', 'b', 'c']) // Type Inference you don't need to specify type, typescript gets it from passed data


// Example of generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<Tea>(arr: Tea[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c', 'd'])
printAnything(['a', 'b', 'c', 'd']) // ts inspects and assigns type


// Genric Constraints: Limits types to pass in as args--------------------

class Car {
    print() {
        console.log('I am a Car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}
printHousesOrCars<House>([new House(), new House()])
printHousesOrCars<Car>([new Car(), new Car()])