import { Sorter } from "./Sorter"

export class NumbersCollection extends Sorter{
    constructor(public data: number[]) {
        super(); // Calls the constructor of Sorter(Superclass)
    }
    get length(){
        return this.data.length
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }
    swap(leftIndex: number, rightIndex: number): void{
        const left_hand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = left_hand
    }
}