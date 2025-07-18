// import { CharacterCollection } from "./v1/collections/CharactersCollection";
// import { LinkedList } from "./v1/collections/LinkedList";
// import { NumbersCollection } from "./v1/collections/NumbersCollection";
// import { Sorter } from "./v1/Sorter";

// V1--------

// const numbersCollection = new NumbersCollection([5, 6, -10, 56, 23, -5, 33])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data);

// const characterCollection = new CharacterCollection('Fabian')
// const sorter1 = new Sorter(characterCollection)
// sorter1.sort()
// console.log(characterCollection.data);

// const linkedList = new LinkedList()
// linkedList.add(550)
// linkedList.add(-10)
// linkedList.add(-3)
// linkedList.add(4)
// linkedList.add(9)

// const sorter2 = new Sorter(linkedList)
// sorter2.sort()
// linkedList.print()

// V2--------

import { CharacterCollection } from "./v2/CharactersCollection";
import { LinkedList } from "./v2/LinkedList";
import { NumbersCollection } from "./v2/NumbersCollection";
const numbersCollection = new NumbersCollection([5, 6, -10, 56, 23, -5, 33])
numbersCollection.sort()
console.log(numbersCollection.data)


const linkedList = new LinkedList()
linkedList.add(550)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.add(9)
linkedList.sort()
linkedList.print()

const characterCollection = new CharacterCollection('Fabian')
characterCollection.sort()
console.log(characterCollection.data);
