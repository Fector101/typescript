const user = {
    name: "conquest",
    age: 1000,
    coords: {
        lat: 0,
        lng: 12,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

// ES2015
const { age }: { age: number } = user;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = user;
