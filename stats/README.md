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

```ts
type MatchData = [Date, string, string, number, number, MatchResult, string]
const data: MatchData = [ 2018-10-28T07:00:00.000Z, 'Man United', 'Everton', 2, 1,'H', 'J Moss']
```

5. `Generics` Passing in `Types` as `Arguments`, then anywhere it's reference it'll have the passed in `type`,


```ts
class HoldAnything<TypeOfData>{ // Developers usually used <T> to refer as type of data 
    data: TypeOfData;
}
const holdNumber = new HoldAnything<number>();
holdNumber.data = 123

const holdNumber = new HoldAnything<string>();
holdNumber.data = 123
```