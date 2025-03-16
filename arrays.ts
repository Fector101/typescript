const car_makers = ["ford", "toyota", "chevy"];

const car_makers1: string[] = [];

const dates = [new Date(), new Date()];

const cars_by_make = [["f150"], ["corolla"], ["camaro"]];
const cars_by_make1: string[][] = [];

// Helps with inference when extrcting values
const car1 = car_makers[0];
const my_car = car_makers.pop();

// Prevent incompatible values
// car_makers.push(100)

// Help with 'map'
car_makers.map((car: string): string => {
    return car;
});

// Flexible types
const important_dates = [new Date(), "2010-10-1"];
important_dates.push("2303-90-1");
important_dates.push(new Date());
// important_dates.push(999)

// Tuple - can arrange order of types in array

const pepsi: [string, boolean, number] = ["brown", true, 1];
// pepsi[0]=1

type Drink = [string, boolean, number];
const fanta: Drink = ["brown", true, 1];
// fanta[0] =1
const sprite: Drink = ["clear", true, 1];
const tea: Drink = ["brown", false, 1];
