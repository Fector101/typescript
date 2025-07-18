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