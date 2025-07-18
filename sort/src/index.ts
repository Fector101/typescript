import { CharacterCollection } from "./v1/collections/CharactersCollection";
import { LinkedList } from "./v1/collections/LinkedList";
import { NumbersCollection } from "./v1/collections/NumbersCollection";
import { Sorter } from "./v1/Sorter";

// const numbersCollection = new NumbersCollection([5, 6, -10, 56, 23, -5, 33])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data);

// const characterCollection = new CharacterCollection('Fabian')
// const sorter1 = new Sorter(characterCollection)
// sorter1.sort()
// console.log(characterCollection.data);

const linkedList = new LinkedList()
linkedList.add(550)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.add(9)

const sorter2 = new Sorter(linkedList)
sorter2.sort()
linkedList.print()
