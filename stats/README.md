1. For anything inside the node standard libary do `npm install @types/node`

2. Enum - Colleection of closely related values small set of values, just use to signal to other engineerings that this are all closly related values
- 
```ts

enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D",
}
```
You can also define an `enum` without any values

```ts

enum MatchResult {
    HomeWin,
    AwayWin,
    Draw,
}
```
3. Type Assertion overriding typescript default behaviour

```ts
row[5] as MatchResult
```

4. `tuple` can arrange order of types in an array