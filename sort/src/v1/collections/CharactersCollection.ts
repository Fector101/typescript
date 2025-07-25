export class CharacterCollection {
    constructor(public data: string) {

    }
    get length() {
        return this.data.length
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }
    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('')

        const left_hand = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = left_hand
        
        this.data = characters.join('')
    }
}