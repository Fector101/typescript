export abstract class Sorter {
    abstract compare(left_index: number, right_index: number): boolean;
    abstract swap(left_index: number, right_index: number): void;
    abstract length: number;

    sort(): void {
        const { length } = this
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}