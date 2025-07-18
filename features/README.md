# Stuff

## General


## Classes

public - This attributes\methods can be called any where any time
private - This attributes\methods can only be called by other methods in this class
protected - This attributes\methods can only be called by other methods in this class or by methods in child class

## Init Arg

1. 
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

2. You can use classes to create instance and also to refer as type
`function (mappable: Company|User){}`
if filter out attribute thing only commons remain

3.The Below code means User must have all attributes of Mappable
```ts

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}
```


```ts
// User.ts

import { Mappable } from "./CustomMap";
export class User implements Mappable{
    name: string;
    location: { lat: number; lng: number; };
    constructor() {
        this.name = faker.name.firstName()
        this.location = {lat:+faker.address.latitude(),lng:+faker.address.longitude()}
    }
    markerContent():string{
        return `User Name: ${this.name}`
    }
}

```