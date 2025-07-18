# Config

1. Part 1
Create `build` and `src` then
Run tsc --init  to create config file then change "rootDir": "./" to "rootDir": "./sort/src" and "outDir": "./" to  "outDir": "./sort/build"  
Then run `tsc` to compile or `tsc -w` to wacth for changes

2. Part 2 (upgrade)
Run `npm install nodemon concurrently` insert the below code

```json
 "scripts": {
    "start:build": "tsc -w", // start compiler in watch mode
    "start:run": "nodemon build/index.js", // run the compiled JavaScript
    "start": "concurrently npm:start:*", // When you run `npm start`, `npm:start:* will look for all scripts that start with `start:` and run them concurrently
  },
```

# Strings are immutable
```js

'a'.charCodeAt() //97
'X'.charCodeAt() // 88
let arr = [22,110,444]
arr[0] = 1
console.log(arr); // [1,110,444]
let note = 'red'
note[0] = 'y'
console.log(note); // 'red'
```

# Checking Types
- `typeof` for primitive values `number, string, boolean, symbol`
- `instanceof` for every other type of values, all values created with constructor function `Sorter, Date`

```js
if (this.collection instanceof Array)
if (typeof this.collection === "string")
```