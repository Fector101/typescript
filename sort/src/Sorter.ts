interface ISorter {
    compare(index_left: number, index_right: number): boolean;
    swap(index_left: number, index_right: number): void;
    length: number
}

export class Sorter {
    constructor(public collection: ISorter) {}
    sort(): void {
        const { length } = this.collection

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }
    }
}