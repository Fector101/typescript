# Stuff

## Classes

public - This attributes\methods can be called any where any time
private - This attributes\methods can only be called by other methods in this class
protected - This attributes\methods can only be called by other methods in this class or by methods in child class

## Init Arg

Instead Of This ❌

```ts
class Vehicle {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
}
```

Do This Instead ✅

```ts
class Vehicle {
    constructor(public color: string) { }
}

```
