# Type Annotaions

Dont use annotations when assign value on initalization

```ts
let apples: number = 3; ❌
let apples = 3;` ✅
```

Typescript Uses Inference to get Type expect when `let apples;` then it assigns type `any`

## When to use Annotations

1. Function that returns the 'any' type e.g JSON.parse(

```ts
const json = '{"x": 10, "y": 29}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}
```

2. When we declare a variable one line line and initalize it later

```ts
let apples:number;
apples = 0
```

3. Var whose type cannot be inferred correctly by inference

```ts
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number= false
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0){
        numberAboveZero = numbers[i]; //Throws error if | number not added to : boolean
    }
    
}
```
