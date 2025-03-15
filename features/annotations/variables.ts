// Type Annotaions
let apples: number = 3; //Dont use annotations when assign value on initalization
// apples = '';
apples = 2;

let speed: string = "fast";
let has_name: boolean = false;
let nothing_much: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["pink", "black", "orange"];
let my_numbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true, true];

// Object literal
let point: { x: number; y: number } = { x: 1, y: 2 };

// Classes
class Car {}
let car: Car = new Car();

// Modifiying Var As Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use Annotations
// 1) Function that returns the 'any' type e.g JSON.parse(
const json = '{"x": 10, "y": 29}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}

// 2) When we declare a variable one line line and initalize it later, E.g
// We use `|`
let value: number;
value = 0;

// 3) Var whose type cannotbe inferred correctly by inference
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number= false
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0){
        numberAboveZero = numbers[i]; //Throw error if | number not added to : boolean
    }
    
}
// Type Inference
let apples1 = 3; // TypeScript Uses Initialization to assign Type
// apples1 = ''; // Should Throw Error

let test; //Assign Any
test = 2;
